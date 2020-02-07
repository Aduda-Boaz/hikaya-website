const FooterSocial = ({ link, icon } = props) => (
  <a href={link} target="_blank">
    <span
      className={
        icon +
        ' mbr-iconfont mbr-iconfont-social social-icon'
      }
    ></span>
  </a>
);

export default FooterSocial;
