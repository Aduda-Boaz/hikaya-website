import React from 'react';
import OurProducts from './OurProducts';
import ProductItem from './ProductItem';

const products = {
  product1: [
    {
      itemClass: 'product-container media-container-row',
      icon: 'activity.png',
      id: 'product-activity',
      name: 'Activity',
      headline: 'Manage your activities and indicators with ease',
      description: `Activity is a tool that makes it easier for nonprofits to manage their project 
        activities and indicator results. Activity is based on an open source project</a> started at 
        <a className="product-link" href="https://www.mercycorps.org/" target="_blank">Mercy Corps</a> in 2014. 
        <br>
        <br>
        Activity is hosted and maintained by Hikaya and can be used any nonprofit.`,
      buttonText: 'Join our beta',
      buttonLink: 'https://activity.hikaya.app/accounts/register/user/none/',
      buttonStyle: 'btn btn-sm btn-primary display-4 try-now-button'
    }
  ],
  product2: [
    {
      itemClass:
        'product-container media-container-row reverse-content dots-container',
      icon: 'dots.png',
      id: 'product-dots',
      name: 'Dots',
      headline: 'Connect and visualize your data from anywhere',
      description: `Dots is a modern visualization and reporting tool to help 
      nonprofits connect their data from multiple sources to visualize and make 
      results reporting easier.`,
      buttonText: 'Learn more',
      buttonLink: 'mailto:info@hikaya.io',
      buttonStyle: 'product-contact-btn'
    }
  ],
  product3: [
    {
      itemClass: 'product-container media-container-row',
      icon: 'circles.png',
      id: 'product-connectors',
      name: 'Connectors',
      headline: 'Harness enterprise-grade solutions in your data pipeline',
      description: `We’re architecting a common data pipeline 
      for nonprofits to manage their unstructured datasets by importing 
      from third-party data collection tools while hosting a series of pre-built 
      connectors that let organizations seamlessly integrate their ERP systems.
      <br>
      <br>
      Built using open source tools like <a className="product-link" href="https://airflow.apache.org/" target="_blank">Apache Airflow</a> 
      and <a className="product-link" href="http://superset.incubator.apache.org/" target="_blank">Apache Superset</a>, we're helping nonprofits 
      implement end-to-end data integration and business intelligence solutions.`,
      buttonText: 'Learn more',
      buttonLink: 'mailto:info@hikaya.io',
      buttonStyle: 'product-contact-btn'
    }
  ]
};

const renderProductItems = rows => {
  return rows.map(row => (
    <section key={row} className='features1 cid-rGdb9qTnNd' id='features1-9'>
      <div className='container'>
        {products[row].map(product => (
          <ProductItem key={product.name} {...product} />
        ))}
      </div>
    </section>
  ));
};

const Products = () => {
  const rows = Object.keys(products);
  return (
    <div>
      <OurProducts />
      {renderProductItems(rows)}
    </div>
  );
};

export default Products;
