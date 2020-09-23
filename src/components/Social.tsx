import React from 'react';
import Container from './Social.styles';
import {
  FaLinkedin as Linkedin,
  FaGithub as Github,
  FaStackOverflow as StackOverflow,
  FaTwitter as Twitter,
  FaFacebookF as Facebook,
  FaInstagram as Instagram,
} from 'react-icons/fa';
import { MdEmail as Email } from 'react-icons/md';

export interface IProps {
  email: string;
  linkedin: string;
  github: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  stackoverflow?: string;
  stackoverflowId?: string;
}

const Social: React.FC<IProps> = (props) => {
  const {
    email,
    linkedin,
    github,
    twitter = '',
    facebook = '',
    instagram = '',
    stackoverflow = '',
    stackoverflowId = '',
  } = props;

  return (
    <Container>
      <a
        href={'mailto:' + email}
        target='_blank'
        rel='noopener noreferrer'
        className='set'>
        <Email />
      </a>
      <a
        href={'https://www.linkedin.com/in/' + linkedin}
        target='_blank'
        rel='noopener noreferrer'
        className='set'>
        <Linkedin />
      </a>
      <a
        href={'https://www.github.com/' + github}
        target='_blank'
        rel='noopener noreferrer'
        className='set'>
        <Github />
      </a>
      {stackoverflow && stackoverflowId && (
        <a
          href={`https://stackoverflow.com/users/${stackoverflowId}/${stackoverflow}`}
          target='_blank'
          rel='noopener noreferrer'
          className='set'>
          <StackOverflow />
        </a>
      )}
      {twitter && (
        <a
          href={`https://twitter.com/${twitter}`}
          target='_blank'
          rel='noopener noreferrer'
          className='set'>
          <Twitter />
        </a>
      )}
      {facebook && (
        <a
          href={`https://facebook.com/${facebook}`}
          target='_blank'
          rel='noopener noreferrer'
          className='set'>
          <Facebook />
        </a>
      )}
      {instagram && (
        <a
          href={`https://instagram.com/${instagram}`}
          target='_blank'
          rel='noopener noreferrer'
          className='set'>
          <Instagram />
        </a>
      )}
    </Container>
  );
};

export default Social;
