"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTS
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const body_parser_1 = __importDefault(require("body-parser"));
const functions_1 = require("./functions");
const network_calls_1 = require("./network-calls");
const admin = __importStar(require("firebase-admin"));
admin.initializeApp({
    credential: admin.credential.cert(require('../' +
        (process.env.DEVELOPMENT ? 'temp-service-key.json' : 'service-key.json'))),
    databaseURL: 'https://autoportfolio-me.firebaseio.com',
});
// VARIABLES
const app = express_1.default();
const port = process.env.PORT || 8080;
// MIDDLEWARE
app.use(compression_1.default());
app.use(helmet_1.default());
app.use(body_parser_1.default.json());
// ROUTES
app.post('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Request Body
        const version = request.body.version || null;
        const social = request.body.social || null;
        const linkedinUrl = request.body.linkedinUrl || null;
        const githubUsername = request.body.githubUsername || null;
        const githubToken = request.body.githubToken || null;
        if (version === null ||
            social === null ||
            linkedinUrl === null ||
            githubUsername === null ||
            githubToken === null) {
            throw new Error('Missing one of the following dependencies:\n{version, linkedinUrl, githubUsername, githubToken, social}');
        }
        let user = functions_1.createUser(version + 1, social);
        let email = process.env.EMAIL || null;
        let password = process.env.PASSWORD || null;
        if (!email || !password) {
            throw new Error('Internal Error: We regret the inconvenience but please try again later');
        }
        user = functions_1.addLinkedInData(user, yield network_calls_1.getLinkedInData(email, password, linkedinUrl));
        const github = yield network_calls_1.getGitHubData(githubToken, githubUsername);
        user = functions_1.addGitHubData(user, github);
        user = functions_1.addLangStats(user, yield network_calls_1.getAllRepos(githubToken, githubUsername, github.repoCount));
        yield admin
            .database()
            .ref('users/_' + githubUsername.toLowerCase())
            .set(user);
        response.send('SUCCESS');
    }
    catch (err) {
        console.log(err);
        response.send({ err });
    }
}));
// BINDING
app.listen(port, () => console.log(`Example app listening on port ${port}`));
//# sourceMappingURL=server.js.map