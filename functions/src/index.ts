import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {
  addLinkedInData,
  createUser,
  addGitHubData,
  addLangStats,
} from './functions';
import { getAllRepos, getGitHubData, getLinkedInData } from './network-calls';
import { ISocial } from './types';
admin.initializeApp();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const generate = functions.https.onRequest(async (request, response) => {
  // functions.logger.info("Hello logs!", {structuredData: true});
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
      throw 'Missing one of the following dependencies:\n{version, linkedinUrl, githubUsername, githubToken, social}';
    }

    let user = createUser(version + 1, social);
    let email = functions.config().generate.email || null;
    let password = functions.config().generate.password || null;
    if (!email || !password) {
      throw 'Internal Error: We regret the inconvenience but please try again later';
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
