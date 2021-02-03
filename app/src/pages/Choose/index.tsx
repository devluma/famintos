import React, { useCallback } from 'react';
import { FiX, FiThumbsUp } from 'react-icons/fi';
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

  const handleLiked = useCallback(
    async () => {
      try {
        // Actions

        history.push('/dashboard');
      } catch (err) {
        // Error
      }
    }, [history],
  );

  return (
    <Container>
      <Header text="Escolha um Restaurante para Almoçar" />

      <Content>
        <Section>
          <h3>Lista dos Restaurantes Disponíveis</h3>

          <ListContainer>
            <ItemContent>
              <strong>Restaurante do João</strong>
              <span>&gt;&gt;</span>
              <p>Restaurante vegano À la carte</p>

              <div>
                <button type="button" onClick={handleLiked}>
                  <FiThumbsUp size={20} color="#0055ff" />
                </button>
              </div>
            </ItemContent>

            <ItemContent>
              <strong>Restaurante do João</strong>
              <span>&gt;&gt;</span>
              <p>Restaurante vegano À la carte</p>

              <div>
                <button type="button" onClick={handleLiked}>
                  <FiThumbsUp size={20} color="#0055ff" />
                </button>
              </div>
            </ItemContent>

            <ItemContent>
              <strong>Restaurante do João</strong>
              <span>&gt;&gt;</span>
              <p>Restaurante vegano À la carte</p>

              <div>
                <button type="button" onClick={handleLiked}>
                  <FiThumbsUp size={20} color="#0055ff" />
                </button>
              </div>
            </ItemContent>

            <ItemContent>
              <strong>Restaurante do João</strong>
              <span>&gt;&gt;</span>
              <p>Restaurante vegano À la carte</p>

              <div>
                <button type="button" onClick={handleLiked}>
                  <FiThumbsUp size={20} color="#0055ff" />
                </button>
              </div>
            </ItemContent>

            <ItemContent>
              <strong>Restaurante do João</strong>
              <span>&gt;&gt;</span>
              <p>Restaurante vegano À la carte</p>

              <div>
                <button type="button" onClick={handleLiked}>
                  <FiThumbsUp size={20} color="#0055ff" />
                </button>
              </div>
            </ItemContent>
          </ListContainer>
        </Section>

        <Link to="/">
          <FiX /> Cancelar e voltar
        </Link>
      </Content>

      <Footer text="©2021 - DBServer - Todos os direitos reservados." />
    </Container>
  );
};

export default Choose;
