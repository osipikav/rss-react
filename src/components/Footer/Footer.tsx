import React from 'react';
import './Footer.css';
import iconGithub from '../../assets/github-mark.svg';

function Footer() {
  return (
    <footer className={'footer'}>
      <a href="https://github.com/osipikav/rss-react/tree/develop" className="footer__link">
        <img className="footer__img" src={iconGithub} alt="Image description" />
        github
      </a>
    </footer>
  );
}

export default Footer;
