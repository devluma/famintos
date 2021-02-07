import React, { useRef, useCallback, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

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
import BtnSmall from '../../components/Button/BtnSmall';
import BtnMedium from '../../components/Button/BtnMedium';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

interface ChooseFormData {
  suggestion: string;
  like: boolean;
}

const Choose: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);
  const { user, signOut } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ChooseFormData) => {
      try {
        setLoading(true);

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
          title: 'Pesquisa realizada!',
          description: 'Você já pode votar em um restaurante disponível!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      } finally {
        setLoading(false);
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

  const handleSignOut = useCallback(
    async () => {
      confirmAlert({
        title: 'Confirme para sair',
        message: 'Você tem certeza de quer fazer isso?',
        buttons: [
          {
            label: 'Sim',
            onClick: () => signOut(),
          },
          {
            label: 'Não',
            onClick: () => false,
          },
        ],
      });
    }, [signOut],
  );

  return (
    <Container>
      <Header
        title="Escolha um Restaurante para Almoçar"
        description="Pesquise um restaurante bom para almoçar"
      />

      <Content>
        <Section>
          <h3>Lista dos Restaurantes Disponíveis</h3>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="suggestion"
              icon={FiAward}
              placeholder="Sugestão de Restaurante"
            />

            <BtnMedium type="submit" loading={loading}>
              <FiSearch size={40} color="##666360" />
            </BtnMedium>
          </Form>

          <ListContainer>
            <ItemContent>
              <strong>Restaurante do João</strong>
              <span><b>&gt;&gt;</b></span>
              <p><b>Este Restaurante</b> já foi escolhido <b>6</b> vezes</p>
              <div>
                <BtnSmall type="button" onClick={handleLiked}>
                  <FiThumbsUp size={20} color="##666360" />
                </BtnSmall>
              </div>
            </ItemContent>

            <ItemContent>
              <strong>Restaurante do João</strong>
              <span><b>&gt;&gt;</b></span>
              <p><b>Este Restaurante</b> já foi escolhido <b>6</b> vezes</p>
              <div>
                <BtnSmall type="button" onClick={handleLiked}>
                  <FiThumbsUp size={20} color="##666360" />
                </BtnSmall>
              </div>
            </ItemContent>

            <ItemContent>
              <strong>Restaurante do João</strong>
              <span><b>&gt;&gt;</b></span>
              <p><b>Este Restaurante</b> já foi escolhido <b>6</b> vezes</p>
              <div>
                <BtnSmall type="button" onClick={handleLiked}>
                  <FiThumbsUp size={20} color="##666360" />
                </BtnSmall>
              </div>
            </ItemContent>

            <ItemContent>
              <strong>Restaurante do João</strong>
              <span><b>&gt;&gt;</b></span>
              <p><b>Este Restaurante</b> já foi escolhido <b>6</b> vezes</p>
              <div>
                <BtnSmall type="button" onClick={handleLiked}>
                  <FiThumbsUp size={20} color="##666360" />
                </BtnSmall>
              </div>
            </ItemContent>

            <ItemContent>
              <strong>Restaurante do João</strong>
              <span><b>&gt;&gt;</b></span>
              <p><b>Este Restaurante</b> já foi escolhido <b>6</b> vezes</p>
              <div>
                <BtnSmall type="button" onClick={handleLiked}>
                  <FiThumbsUp size={20} color="##666360" />
                </BtnSmall>
              </div>
            </ItemContent>

            <ItemContent>
              <strong>Restaurante do João</strong>
              <span><b>&gt;&gt;</b></span>
              <p><b>Este Restaurante</b> já foi escolhido <b>6</b> vezes</p>
              <div>
                <BtnSmall type="button" onClick={handleLiked}>
                  <FiThumbsUp size={20} color="##666360" />
                </BtnSmall>
              </div>
            </ItemContent>

            <ItemContent>
              <strong>Restaurante do João</strong>
              <span><b>&gt;&gt;</b></span>
              <p><b>Este Restaurante</b> já foi escolhido <b>6</b> vezes</p>
              <div>
                <BtnSmall type="button" onClick={handleLiked}>
                  <FiThumbsUp size={20} color="##666360" />
                </BtnSmall>
              </div>
            </ItemContent>
          </ListContainer>
        </Section>

        <Link to="/" onClick={handleSignOut}>
          <FiX /> Cancelar e sair
        </Link>
      </Content>

      <Footer text="©2021 - DBServer - Todos os direitos reservados." />
    </Container>
  );
};

export default Choose;
