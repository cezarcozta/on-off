import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Head from 'next/head';
import Switch from 'react-switch';
import { shade } from 'polished';

import LigthBulb from '../assets/lightbulb.svg';
import { Container } from '../styles/pages/Home';

interface Props {
  toggleTheme(): void;
}

const Home: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)
  return (
    <Container>
      <Head>
        <title>ON / OFF</title>
      </Head>

      <LigthBulb />
      <h1>ReactJS Change Theme</h1>
      <p>A ReactJS + Next.js Light/Dark Change Theme Switcher.</p>
      <Switch
        onChange={toggleTheme}
        checked={title === 'light'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        className="switch"
        handleDiameter={20}
        offColor={shade(0.25, colors.primary)}
        onColor={colors.secundary}
      />
    </Container>
  );
}

export default Home;
