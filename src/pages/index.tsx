import React from 'react';
import Head from 'next/head';

import LigthBulb from '../assets/lightbulb.svg';
import Power from '../assets/power-off-solid.svg';
import { Container, Button } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>ON / OFF</title>
      </Head>

      <LigthBulb />
      <h1>ReactJS Change Theme</h1>
      <p>A ReactJS + Next.js Light/Dark Change Theme button.</p>
      <Button>
        <Power />
      </Button>
    </Container>
  );
}

export default Home;
