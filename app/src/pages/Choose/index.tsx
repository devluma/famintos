import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { FiX, FiThumbsUp, FiAward, FiSearch } from 'react-icons/fi';
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
import Input from '../../components/Input';
// import Button from '../../components/Button';

import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

interface ChooseFormData {
  suggestion: string;
  like: boolean;
}

const Choose: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ChooseFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          suggestion: Yup.string().required('Sugestão de restaurante é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        history.push('/choose');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você adicionou um novo restaurante!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer o cadastro, tente novamente.',
        });
      }
    },
    [addToast, history],
  );

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
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h3>Lista dos Restaurantes Disponíveis</h3>

            <div>
              <Input
                name="suggestion"
                icon={FiAward}
                placeholder="Sugestão de Restaurante"
              />

              <button type="button">
                <FiSearch size={40} color="#0055ff" />
              </button>
            </div>

            <ListContainer>
              <ItemContent>
                <strong>Restaurante do João</strong>
                <span>&gt;&gt;</span>
                <p><b>Este Restaurante</b> já foi escolhido <b>6</b> vezes</p>

                <div>
                  <button type="button" onClick={handleLiked}>
                    <FiThumbsUp size={20} color="#0055ff" />
                  </button>
                </div>
              </ItemContent>

              <ItemContent>
                <strong>Restaurante do João</strong>
                <span>&gt;&gt;</span>
                <p><b>Este Restaurante</b> já foi escolhido <b>6</b> vezes</p>

                <div>
                  <button type="button" onClick={handleLiked}>
                    <FiThumbsUp size={20} color="#0055ff" />
                  </button>
                </div>
              </ItemContent>

              <ItemContent>
                <strong>Restaurante do João</strong>
                <span>&gt;&gt;</span>
                <p><b>Este Restaurante</b> já foi escolhido <b>6</b> vezes</p>

                <div>
                  <button type="button" onClick={handleLiked}>
                    <FiThumbsUp size={20} color="#0055ff" />
                  </button>
                </div>
              </ItemContent>

              <ItemContent>
                <strong>Restaurante do João</strong>
                <span>&gt;&gt;</span>
                <p><b>Este Restaurante</b> já foi escolhido <b>6</b> vezes</p>

                <div>
                  <button type="button" onClick={handleLiked}>
                    <FiThumbsUp size={20} color="#0055ff" />
                  </button>
                </div>
              </ItemContent>

              <ItemContent>
                <strong>Restaurante do João</strong>
                <span>&gt;&gt;</span>
                <p><b>Este Restaurante</b> já foi escolhido <b>6</b> vezes</p>

                <div>
                  <button type="button" onClick={handleLiked}>
                    <FiThumbsUp size={20} color="#0055ff" />
                  </button>
                </div>
              </ItemContent>
            </ListContainer>
          </Form>
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
