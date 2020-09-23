import React from 'react';
import Container from './About.styles';

interface IProps {
  summary: string[];
}

const About: React.FC<IProps> = (props) => {
  return (
    <Container>
      <div className='container'>
        <h2>About Me</h2>
        <div className='bar' />
        {props.summary.map((content, i) => (
          <p key={'[SUMMARY]-' + i}>{content}</p>
        ))}
      </div>
    </Container>
  );
};

export default About;
