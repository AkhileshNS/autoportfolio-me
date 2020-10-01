// IMPORTS
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import { ISocial } from './types';
import {
  createUser,
  addGitHubData,
  addLinkedInData,
  addLangStats,
} from './functions';
import { getAllRepos, getGitHubData, getLinkedInData } from './network-calls';
import * as admin from 'firebase-admin';
admin.initializeApp({
  credential: admin.credential.cert(
    require('../' +
      (process.env.DEVELOPMENT ? 'temp-service-key.json' : 'service-key.json'))
  ),
  databaseURL: 'https://autoportfolio-me.firebaseio.com',
});

// VARIABLES
const app = express();
const port = process.env.PORT || 8080;

// MIDDLEWARE
app.use(compression());
app.use(helmet());
app.use(bodyParser.json());

// ROUTES
app.post('/', async (request, response) => {
  try {
    // Request Body
    const version: number = request.body.version || null;
    const social: ISocial = request.body.social || null;
    const linkedinUrl: string = request.body.linkedinUrl || null;
    const githubUsername: string = request.body.githubUsername || null;
    const githubToken: string = request.body.githubToken || null;

    if (
      !version ||
      !social ||
      !linkedinUrl ||
      !githubUsername ||
      !githubToken
    ) {
      throw new Error(
        'Missing one of the following dependencies:\n{version, linkedinUrl, githubUsername, githubToken, social}'
      );
    }

    let user = createUser(version + 1, social);
    let email = process.env.EMAIL || null;
    let password = process.env.PASSWORD || null;
    if (!email || !password) {
      throw new Error(
        'Internal Error: We regret the inconvenience but please try again later'
      );
    }

    user = addLinkedInData(
      user,
      await getLinkedInData(email, password, linkedinUrl)
    );

    const github = await getGitHubData(githubToken, githubUsername);
    user = addGitHubData(user, github);
    user = addLangStats(
      user,
      await getAllRepos(githubToken, githubUsername, github.repoCount)
    );

    await admin
      .database()
      .ref('users/_' + githubUsername)
      .set(user);
    response.send('SUCCESS');
  } catch (err) {
    response.send({ err });
  }
});

// BINDING
app.listen(port, () => console.log(`Example app listening on port ${port}`));
