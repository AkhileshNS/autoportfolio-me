import scrapedin from 'scrapedin';
import { IGitHub, ILinkedIn, IRepoLanguages } from './types';
import { GraphQLClient, gql } from 'graphql-request';
import { Headers } from 'cross-fetch';
global.Headers = global.Headers || Headers;

export const getLinkedInData = async (
  email: string,
  password: string,
  link: string
): Promise<ILinkedIn> => {
  const profileScraper = await scrapedin({
    email,
    password,
    isHeadless: true,
    puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  // aniruddha-m-n-4715b3153 [OR] akhilesh-ns-889899195
  const profile = await profileScraper(link);
  return profile;
};

export const getGitHubData = async (
  token: string,
  username: string
): Promise<IGitHub> => {
  // GraphQL Client
  const client = new GraphQLClient('https://api.github.com/graphql', {
    headers: {
      authorization: 'Bearer ' + token,
    },
  });

  // GraphQL Query
  const query = gql`query {
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

  const data = await client.request(query);
  return {
    url: data.user.avatarUrl,
    issues: data.user.contributionsCollection.totalIssueContributions,
    commits: data.user.contributionsCollection.totalCommitContributions,
    pullRequests:
      data.user.contributionsCollection.totalPullRequestContributions,
    pullRequestReviews:
      data.user.contributionsCollection.totalPullRequestReviewContributions,
    repoCount: data.user.repositories.totalCount,
    repos: data.user.pinnedItems.nodes,
  };
};

export const getAllRepos = async (
  token: string,
  username: string,
  repoCount: number
): Promise<IRepoLanguages[]> => {
  // GraphQL Client
  const client = new GraphQLClient('https://api.github.com/graphql', {
    headers: {
      authorization: 'Bearer ' + token,
    },
  });

  // GraphQL Query
  const query = gql`
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

  const data = await client.request(query);
  return data.user.repositories.nodes.filter(
    (node: IRepoLanguages) => node.languages.edges.length > 0
  );
};
