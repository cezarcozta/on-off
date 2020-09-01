import React from 'react';
import Head from 'next/head';

import LigthBulb from '../assets/lightbulb.svg';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>ON / OFF</title>
      </Head>

      <main>
        <LigthBulb />
        <h1>ON / OFF</h1>
      </main>
    </div>
  );
}

export default Home;
