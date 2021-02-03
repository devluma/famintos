import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import {
  Container,
  Content,
  Section,
  ListContainer,
  ItemContent,
} from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Choose: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Header text="Escolha um Restaurante para Almoçar" />

      <Content>
        <Section>
          <h3>Lista dos Restaurantes Disponíveis</h3>

          <ListContainer>
            <ItemContent>Restaurante do Copernico</ItemContent>
            <ItemContent>Restaurante do Tião</ItemContent>
            <ItemContent>Restaurante do Boss</ItemContent>
            <ItemContent>Restaurante dos Redneck</ItemContent>
            <ItemContent>Mercado Zaffari</ItemContent>
            <ItemContent>Lancheria da Tia Zila</ItemContent>
          </ListContainer>
        </Section>

        <Link to="/dashboard">
          <FiArrowRight />
          Ir para o dashboard
        </Link>
      </Content>

      <Footer text="©2021 - DBServer - Todos os direitos reservados." />
    </Container>
  );
};

export default Choose;
