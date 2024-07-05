// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Slide from '../components/Slide';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Card />
      <Slide />
      <Footer />
    </div>
  );
};

export default Home;
