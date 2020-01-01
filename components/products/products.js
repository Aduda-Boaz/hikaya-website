import React from 'react';
import OurProducts from './OurProducts';
import ProductItem from './ProductItem';

const products = {
  product1: [
    {
      itemClass: 'media-container-row',
      icon: 'activity.png',
      id: 'product-activity',
      name: 'Activity',
      headline: 'Manage your activities and indicators with ease',
      description: `Activity is a tool that makes it easier for nonprofits to manage their project 
        activities and indicator results. Activity is based on an <a className="product-link" 
        href="https://github.com/mercycorps/TolaActivity" >open source project</a> started at 
        <a className="product-link" href="https://www.mercycorps.org/">Mercy Corps</a> in 2014. 
        Activity is hosted and maintained by Hikaya and can be used any nonprofit.`,
      buttonText: 'Join our beta',
      buttonLink: 'https://activity.hikaya.app/accounts/register/user/none/',
      buttonStyle: 'btn btn-sm btn-primary display-4 try-now-button'
    }
  ],
  product2: [
    {
      itemClass: 'media-container-row reverse-content dots-container',
      icon: 'dots.png',
      id: 'product-dots',
      name: 'Dots',
      headline: 'Connect and visualize your data from anywhere',
      description: `Built using open source tools like
                <a className="product-link" href="https://airflow.apache.org/">Apache Airflow</a> and
                <a className="product-link" href="https://metabase.com/">Metabase</a>, we’re architecting
                a common data pipeline for nonprofits to manage their
                unstructured datasets by importing datasets from third-party
                data collection tools while hosting a series of pre-built
                connectors that let organizations integrate their ERP systems.
                The application provides a workspace to perform cleaning and
                join operations alongside scheduling imports and exports between
                systems.`,
      buttonText: 'Contact us',
      buttonLink: 'mailto:info@hikaya.io',
      buttonStyle: 'product-contact-btn'
    }
  ],
  product3: [
    {
      itemClass: 'media-container-row',
      icon: 'circles.png',
      id: 'product-circles',
      name: 'Circles',
      headline: 'Standard form designer that automates KPI tracking',
      description: `We are building a progressive web application that
                helps design, offline data collection forms that are
                standardized and linked to key performance indicators so that
                nonprofits can easily automate their reporting. This application
                is based on a micro-service architecture for high performance,
                scalability, and availability using
                <a className="product-link" href="https://angular.io/">Angular 8</a>
                and
                <a className="product-link" href="https://www.python.org/">Python</a>
                /
                <a className="product-link" href="https://www.djangoproject.com/">Django</a>.`,
      buttonText: 'Contact us',
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
