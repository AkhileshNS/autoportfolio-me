export interface IProfile {
  name: string;
  location: string;
  position: string;
  image: string;
}

export interface IStat {
  name: string;
  percentage: number;
}

export interface IJob {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

export interface IProject {
  title: string;
  description: string;
  stars: number;
  forks: number;
  link: string;
  stats: IStat[];
}

export interface ISocial {
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  stackoverflow?: string;
  stackoverflowId?: string;
}

export interface Info {
  issues: number;
  commits: number;
  pullRequests: number;
  pullRequestReviews: number;
}

export interface IUser {
  version: number;
  profile: IProfile;
  summary: string[];
  info: Info;
  stats: IStat[];
  jobs: IJob[];
  projects: IProject[];
  social: ISocial;
}

export interface IUserProfile {
  name: string;
  headline: string;
  location: string;
  summary: string;
  [key: string]: any;
}

export interface IRole {
  title: string;
  description: string;
  date1: string;
  date2: string;
}

export interface IPosition {
  title: string;
  company: string;
  description: string;
  date1: string;
  date2: string;
  roles?: IRole[];
}

export interface ILinkedIn {
  profile: IUserProfile;
  positions: IPosition[];
  [key: string]: any;
}

export interface INode {
  name: string;
}

export interface IEdge {
  node: INode;
  size: number;
}

export interface ILanguages {
  totalSize?: number;
  edges: IEdge[];
}

export interface IRepoLanguage {
  nodes: INode[];
}

export interface IRepoLanguages {
  languages: IRepoLanguage;
}

export interface IRepo {
  name: string;
  description: string;
  stargazerCount: number;
  forkCount: number;
  url: string;
  totalSize: number;
  languages: ILanguages;
}

export interface IGitHub {
  url: string;
  issues: number;
  commits: number;
  pullRequests: number;
  pullRequestReviews: number;
  repoCount: number;
  repos: IRepo[];
}
