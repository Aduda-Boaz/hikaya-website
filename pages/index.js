import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import Mission from '../components/Mission';
import Stories from '../components/story/Stories';
import Products from '../components/products/Products';
import Footer from '../components/footer/Footer';
import Cookie from '../components/cookie';
import Partners from '../components/Partners';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Nav />
    <Mission />
    <Stories />
    <Products />
    <Partners />
    <Footer />
    <Cookie />
  </div>
);

export default Home;
