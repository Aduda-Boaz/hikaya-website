import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Mission from '../components/mission';
import Stories from '../components/story/stories';
import Products from '../components/products/products';
import Footer from '../components/footer/footer';
import Cookie from '../components/cookie';

const Home = () => (
  <div>
  <Head>
    <title>Home</title>
  </Head>
    <Nav />
    <Mission />
    <Stories />
    <Products />
    <Footer />
    <Cookie/>
  </div>
)

export default Home
