import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import {
  Container,
  Content,
  Section,
  GraphContainer,
} from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Dashboard: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Header text="Dashboard dos Vencedores" />

      <Content>
        <Section>
          <h3>Lista dos Restaurantes Vencedores</h3>

          <GraphContainer>
            Gráficos dos Vencedores
          </GraphContainer>
        </Section>

        <Link to="/">
          <FiArrowLeft />
          Voltar para a home
        </Link>
      </Content>

      <Footer text="©2021 - DBServer - Todos os direitos reservados." />
    </Container>
  );
};

export default Dashboard;
