import React from 'react';
import Copyright from './copyright';
import FooterSocial from './footer-social';

const socials = {
    social1: [{
    link: 'mailto:info@hikaya.io',
    icon: 'fas fa-envelope',
  },],
  social2: [{
    link: 'https://github.com/hikaya-io',
    icon: 'fab fa-github',
  },],
  social3: [{
    link: 'https://angel.co/hikaya',
    icon: 'fab fa-angellist',
  },],
  social4: [{
    link: 'https://www.linkedin.com/company/hikaya-io/',
    icon: 'fab fa-linkedin-in',
  },],
  social5: [{
    link: 'https://twitter.com/hikaya_io',
    icon: 'fab fa-twitter',
  },],
};

const renderFooterSocials = rows => {
  return rows.map(row => (
    <div className="soc-item">
      {socials[row].map(social => (
        <FooterSocial {...social} />
      ))}
    </div>
  ));
};

const Footer = () => {
  const rows = Object.keys(socials);
  return (
    <section
        className="mbr-section contacts3 cid-rGdcY2aoGA background__light-blue"
      id="contacts3-a" >
        <div className="footer-container">
            <Copyright />
            <div className="social-container">
                { renderFooterSocials(rows) }
            </div>
        </div>
    </section>
  );
};

export default Footer;
