import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Mission from '../components/mission';
import Stories from '../components/story/stories';

const Home = () => (
  <div>
  <Head>
    <title>Home</title>
  </Head>
    <Nav />
    <Mission />
    <Stories />
  </div>
)

export default Home
