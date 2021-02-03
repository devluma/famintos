import React from 'react';

import {
  Container,
  Content,
  Section,
} from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Home: React.FC = () => (
  <Container>
    <Header text="APP dos Famintos" />

    <Content>
      <Section>
        <h3>Página Inícial</h3>
      </Section>
    </Content>

    <Footer text="©2021 - DBServer - Todos os direitos reservados." />
  </Container>
);

export default Home;
