import React from 'react';
import Container from './Job.styles';

export interface IProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

const Job: React.FC<IProps> = (props) => {
  return (
    <Container>
      <div className='header-1'>
        <h3>{props.title}</h3>
        <p>{props.location}</p>
      </div>
      <div className='header-2'>
        <p>{props.company.toUpperCase()}</p>
        <p>{props.duration}</p>
      </div>
      <ul>
        {props.description.map((item, i) => (
          <li key={item + i}>{item}</li>
        ))}
      </ul>
    </Container>
  );
};

export default Job;
