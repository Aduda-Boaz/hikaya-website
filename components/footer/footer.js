import React from 'react';
import Copyright from './copyright';
import FooterSocial from './footer-social';
import FooterMenu from './footer-menu';

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

// Products menu items
const productsMenuItems = {
    item1: [{
        link: '#product-activity',
        name: 'Activity'
    }],
    item2: [{
        link: '#product-dots',
        name: 'Dots'
    }],
    item3: [{
        link: '#product-circles',
        name: 'Circles'
    }]
};

// Company menu items
const companyMenuItems = {
    item1: [{
        link: 'index.html#content4-3',
        name: 'About'
    }],
    item2: [{
        link: '',
        name: 'Clients'
    }],
    item3: [{
        link: '',
        name: 'Team'
    }],
    tem2: [{
        link: '',
        name: 'Engineering'
    }],
    item3: [{
        link: '',
        name: 'Blog'
    }]
};

// Support menu items
const supportMenuItems = {
    item1: [{
        link: '',
        name: 'User knowledge base'
    }],
    item2: [{
        link: '',
        name: 'API Documentation'
    }],
};

// Render footer menu items
const renderFooterMenu = menuItems => {
    return menuItems.map(menuItem => (
        <li className="list-group-item footer-menu-item">
            {productsMenuItems[menuItem].map(item => (
            <FooterMenu {...item} />
        ))}
      </li>
    ));
};

const renderCompanyFooterMenu = menuItems => {
    return menuItems.map(menuItem => (
        <li className="list-group-item footer-menu-item">
            {companyMenuItems[menuItem].map(item => (
            <FooterMenu {...item} />
        ))}
      </li>
    ));
};

const renderSupportFooterMenu = menuItems => {
    return menuItems.map(menuItem => (
        <li className="list-group-item footer-menu-item">
            {supportMenuItems[menuItem].map(item => (
            <FooterMenu {...item} />
        ))}
      </li>
    ));
};
// Render footer social icons
const renderFooterSocials = rows => {
  return rows.map(row => (
    <div className="soc-item">
      {socials[row].map(social => (
        <FooterSocial {...social} />
      ))}
    </div>
  ));
};

// Render footer
const Footer = () => {
    const productsMenu = Object.keys(productsMenuItems);
    const companyMenu = Object.keys(companyMenuItems);
    const supportMenu = Object.keys(supportMenuItems);
    const rows = Object.keys(socials);
  return (
    <section
        className="mbr-section contacts3 background__light-blue"
      id="contacts3-a" >
        <div className="footer-menu-container">
            <div className="row footer-menu">
                <div className="col-sm-4">
                    <p className="mbr-text mbr-fonts-style display-7 header">Products</p>
                    <ul className="list-group list-group-flush"> 
                        { renderFooterMenu(productsMenu) }
                    </ul>
                </div>
                <div className="col-sm-4">
                    <p className="mbr-text mbr-fonts-style display-7 header">Company</p>
                    <ul className="list-group list-group-flush">
                        { renderCompanyFooterMenu(companyMenu) }
                    </ul>
                </div>
                <div className="col-sm-4">
                    <p className="mbr-text mbr-fonts-style display-7 header">Support</p>
                    <ul className="list-group list-group-flush">
                        { renderSupportFooterMenu(supportMenu) }
                    </ul>
                </div>
            </div>

        </div>
      
      <div className="footer-socials-container">
        <div className="footer-container">
            <Copyright />
            <div className="social-container">
                { renderFooterSocials(rows) }
            </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
