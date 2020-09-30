import React from 'react';
import Container from './Skills.styles';
import Languages, { IStats } from './Languages';

interface Info {
  issues: number;
  commits: number;
  pullRequests: number;
  pullRequestReviews: number;
}

interface IProps {
  stats: IStats;
  info: Info;
}

const createReport = (info: Info) => {
  const infoArr = [];

  if (info.issues) {
    infoArr.push(`${info.issues} issue${info.issues > 1 ? 's' : ''}`);
  }
  if (info.commits) {
    infoArr.push(`${info.commits} commit${info.commits > 1 ? 's' : ''}`);
  }
  if (info.pullRequests) {
    infoArr.push(
      `${info.pullRequests} pull request${info.pullRequests > 1 ? 's' : ''}`
    );
  }
  if (info.pullRequestReviews) {
    infoArr.push(
      `${info.pullRequestReviews} pull request review${
        info.pullRequestReviews > 1 ? 's' : ''
      }`
    );
  }

  if (!infoArr.length) {
    return 'nothing';
  }

  const lastButOne = infoArr.slice(0, infoArr.length - 1);
  if (lastButOne.length === 0) {
    return infoArr[0];
  }

  return `${lastButOne.join(', ')} and ${infoArr[infoArr.length - 1]}`;
};

const Skills: React.FC<IProps> = (props) => {
  return (
    <Container>
      <div className='container'>
        <h2>Skills</h2>
        <div className='bar' />
        <p>
          Everyone just loves stats don't they. So here's some stats for you,
          straight from GitHub
        </p>
        <Languages stats={props.stats} />
        <p>
          With a total github development activity that consists of{' '}
          {createReport(props.info)}
        </p>
      </div>
    </Container>
  );
};

export default Skills;
