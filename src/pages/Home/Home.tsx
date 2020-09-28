import React from 'react';
import Container from './Home.styles';

const Home: React.FC = (props) => {
  const [github, setGithub] = React.useState('');

  return (
    <Container>
      <div className='container'>
        <h1>Claim your free portfolio</h1>
        <h3>Created using data from your linkedin and github</h3>
        <p>
          To get started, just enter your GitHub username and sign into your
          linkedin account
        </p>
        <div className='mini-form'>
          <input
            type='text'
            placeholder='Github Username'
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;
