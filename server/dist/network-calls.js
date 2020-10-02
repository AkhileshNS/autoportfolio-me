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
Object.defineProperty(exports, "__esModule", { value: true });
const scrapedin_1 = __importDefault(require("scrapedin"));
const graphql_request_1 = require("graphql-request");
const cross_fetch_1 = require("cross-fetch");
global.Headers = global.Headers || cross_fetch_1.Headers;
exports.getLinkedInData = (email, password, link) => __awaiter(void 0, void 0, void 0, function* () {
    const profileScraper = yield scrapedin_1.default({ email, password });
    // aniruddha-m-n-4715b3153 [OR] akhilesh-ns-889899195
    const profile = yield profileScraper(link);
    return profile;
});
exports.getGitHubData = (token, username) => __awaiter(void 0, void 0, void 0, function* () {
    // GraphQL Client
    const client = new graphql_request_1.GraphQLClient('https://api.github.com/graphql', {
        headers: {
            authorization: 'Bearer ' + token,
        },
    });
    // GraphQL Query
    const query = graphql_request_1.gql `query {
    user(login: "${username}") {
      avatarUrl
      contributionsCollection {
        totalIssueContributions
        totalCommitContributions
        totalRepositoryContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
      }
      repositories {
        totalCount
      }
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            stargazerCount
            forkCount
            url
            languages(first: 6) {
              totalSize
              edges {
                node {
                  name
                }
                size
              }
            }
          }
        }
      }
    }
  }`;
    const data = yield client.request(query);
    return {
        url: data.user.avatarUrl,
        issues: data.user.contributionsCollection.totalIssueContributions,
        commits: data.user.contributionsCollection.totalCommitContributions,
        pullRequests: data.user.contributionsCollection.totalPullRequestContributions,
        pullRequestReviews: data.user.contributionsCollection.totalPullRequestReviewContributions,
        repoCount: data.user.repositories.totalCount,
        repos: data.user.pinnedItems.nodes,
    };
});
exports.getAllRepos = (token, username, repoCount) => __awaiter(void 0, void 0, void 0, function* () {
    // GraphQL Client
    const client = new graphql_request_1.GraphQLClient('https://api.github.com/graphql', {
        headers: {
            authorization: 'Bearer ' + token,
        },
    });
    // GraphQL Query
    const query = graphql_request_1.gql `
    query {
      user(login: "${username}") {
        repositories(first: ${repoCount}) {
          nodes {
            languages(first: 100) {
              totalSize
              edges {
                node {
                  name
                }
                size
              }
            }
          }
        }
      }
    }
  `;
    const data = yield client.request(query);
    return data.user.repositories.nodes.filter((node) => node.languages.edges.length > 0);
});
//# sourceMappingURL=network-calls.js.map