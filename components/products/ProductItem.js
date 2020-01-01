const ProductItem = ({
  icon,
  id,
  name,
  headline,
  description,
  buttonText,
  buttonLink,
  itemClass,
  buttonStyle,
} = props) => (
  <div className={itemClass} id={id}>
    <div className="card p-3 col-12 col-md-6 col-lg-6">
      <div className="card-img pb-3">
        <span className="mbr-iconfont">
          <img className="product" src={'assets/images/' + icon} alt={name} />
        </span>
      </div>
      <h4 className="card-title py-3 mbr-fonts-style display-4 product-title">
        <strong>{name}</strong>
      </h4>
    </div>
    <div className="card p-3 col-12 col-md-6 col-lg-6">
      <div className="card-box">
        <p className="mbr-text mbr-fonts-style display-7">
          <span className="product-header">{headline}</span>
          <br />
          <br />
          {renderHTML(description)}
          <br />
          <br />
        </p>
        <div className="product-btn-wrapper">
          <a className={buttonStyle} href={buttonLink} target="_blank">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  </div>
);

const renderHTML = rawHTML =>
  React.createElement('span', { dangerouslySetInnerHTML: { __html: rawHTML } });

export default ProductItem;
