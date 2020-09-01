import React from 'react';
import Head from 'next/head';

import Logo from '../assets/rocketseat.svg';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>ON / OFF</title>
      </Head>

      <main>
        <Logo />
        <h1>ON / OFF</h1>
      </main>
    </div>
  );
}

export default Home;
