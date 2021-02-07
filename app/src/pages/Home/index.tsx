import React from 'react';
import { FiAperture, FiBarChart2, FiUserCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import {
  Container,
  Content,
  Section,
  SectionHeader,
  SectionArticle,
  SectionFooter,
} from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Home: React.FC = () => (
  <Container>
    <Header title="APP dos Famintos" />

    <Content>
      <Section>
        <SectionHeader>
          <h3>Agora os famintos podem Escolher onde Almoçar</h3>
        </SectionHeader>
        <SectionArticle>
          <p>Os times da <b>DBserver</b> enfrentam um grande problema.</p>
          <p>Como eles são muito democráticos, todos os dias eles gastam
            30 minutos decidindo onde eles irão almoçar.
          </p>
          <p>Registre uma opção de <b>Restaurante</b> para o seu <b>Time.</b></p>
        </SectionArticle>
        <SectionFooter>
          <Link to="/signin">
            <FiUserCheck /> Login
          </Link>

          <Link to="/register">
            <FiAperture /> Registrar
          </Link>

          <Link to="/dashboard">
            <FiBarChart2 /> Dashboard
          </Link>
        </SectionFooter>
      </Section>
    </Content>

    <Footer text="©2021 - DBServer - Todos os direitos reservados." />
  </Container>
);

export default Home;
