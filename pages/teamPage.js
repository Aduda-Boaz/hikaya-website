import React from 'react';
import Team from '../components/team/Team';
import Nav from '../components/nav';
import Footer from '../components/footer/footer';

export const teamPage = () => {
  return (
    <>
      <Nav />
      <Team />
      <Footer />
    </>
  );
};

export default teamPage;
