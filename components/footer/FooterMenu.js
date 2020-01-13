const FooterMenu = ({ link, name } = props) => (
  <a
    className='mbr-text mbr-fonts-style text-muted font-weight-light'
    href={link}
    target='_blank'
  >
    {name}
  </a>
);

export default FooterMenu;
