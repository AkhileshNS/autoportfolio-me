import React from 'react';
import Container from './Portfolio.styles';
import {
  summary,
  profile,
  stats,
  jobs,
  projects,
  social,
} from 'global/constants';
import Skills from 'components/Skills';
import Footer from 'components/Footer';
import Profile from 'components/Profile';
import About from 'components/About';
import Experience from 'components/Experience';
import Projects from 'components/Projects';
import { ScrollingProvider, Section } from 'react-scroll-section';
import firebase from 'global/firebase';

const Portfolio: React.FC = () => {
  const name = 'AkhileshNS'.toLowerCase();
  const [user, setUser] = React.useState({
    version: 0,
    profile,
    summary,
    stats,
    jobs,
    projects,
    social,
  });

  React.useEffect(() => {
    const cached_user = window.localStorage.getItem('_' + name);
    if (cached_user) {
      setUser(JSON.parse(cached_user));
    }

    const getData = async () => {
      try {
        const versionSnap = await firebase
          .database()
          .ref(`users/_${name}/version`)
          .once('value');
        const db_version = versionSnap.val();

        if (
          cached_user &&
          JSON.parse(cached_user).version === parseInt(db_version)
        ) {
          return;
        }

        const userSnap = await firebase
          .database()
          .ref('users/_' + name)
          .once('value');
        const db_user = userSnap.val();
        setUser(db_user);
        localStorage.setItem('_' + name, JSON.stringify(db_user));
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <ScrollingProvider>
      <Container>
        <Section id='profile'>
          <Profile {...user.profile} />
        </Section>
        <Section id='about'>
          <About summary={user.summary} />
        </Section>
        <Section id='skills'>
          <Skills stats={user.stats} />
        </Section>
        <Section id='experience'>
          <Experience jobs={user.jobs} />
        </Section>
        <Section id='projects'>
          <Projects projects={user.projects} />
        </Section>
        <Section id='footer'>
          <Footer name={user.profile.name} social={user.social} />
        </Section>
      </Container>
    </ScrollingProvider>
  );
};

export default Portfolio;
