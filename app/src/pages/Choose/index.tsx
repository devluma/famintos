import React, { useRef, useCallback, useState, useEffect } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { FiX, FiThumbsUp, FiAward, FiSearch, FiPlus, FiBarChart, FiPower } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import {
  Container,
  Content,
  Section,
  ListContainer,
  ItemContent,
  ItemNotFound,
} from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import BtnSmall from '../../components/Button/BtnSmall';
import BtnMedium from '../../components/Button/BtnMedium';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import api from '../../services/api';
// import getValidationErrors from '../../utils/getValidationErrors';

import IRestaurant from '../../interfaces/Restaurant';

interface ChooseFormData {
  name: string;
}

const Choose: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [canEnjoy, setCanEnjoy] = useState(true);
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const [loading, setLoading] = useState(false);

  const { user, signOut } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleCreate = useCallback(
    async (data: ChooseFormData) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Sugestão de restaurante é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/restaurants', data);

        addToast({
          type: 'info',
          title: 'Pesquisa realizada!',
          description: 'Você já pode votar em um restaurante disponível!',
        });

        history.push('/');
      } catch (err) {
        const { response } = err;

        let message = 'Ocorreu um erro ao fazer sua escolha, tente novamente.';

        if (response && response.data) {
          const dataErr = response.data;

          message = dataErr.message;
          formRef.current?.setErrors({ email: message });
        }

        addToast({
          type: 'error',
          title: 'Erro na escolha',
          description: message,
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, setLoading, history],
  );

  const handleSeach = useCallback(
    async (e) => {
      try {
        e.preventDefault();

        setLoading(true);

        const searchField = formRef.current?.getFieldValue('name');

        if (searchField) {
          await api
            .get<IRestaurant[]>('/restaurants', {
              params: {
                name: searchField,
              },
            })
            .then((response) => {
              setRestaurants(response.data);
            });

          addToast({
            type: 'info',
            title: 'Consula realizada!',
            description: 'Você já pode votar em um restaurante disponível!',
          });
        } else {
          history.push('/');
        }
      } catch (err) {
        const { response } = err;

        let message = 'Ocorreu um erro ao fazer a pesquisa, tente novamente.';

        if (response && response.data) {
          const dataErr = response.data;

          message = dataErr.message;
          formRef.current?.setErrors({ email: message });
        }

        addToast({
          type: 'error',
          title: 'Erro na consula',
          description: message,
        });
      } finally {
        setLoading(false);
      }
    },
    [setLoading, addToast, history],
  );

  const handleLiked = useCallback(
    async (restaurant) => {
      try {
        setLoading(true);

        // await api
        //   .put<IRestaurant>(`/restaurants/${restaurant.id}`, {
        //     attempts: restaurant.attempts + 1,
        //   });

        addToast({
          type: 'success',
          title: 'Escolha realizada!',
          description: 'Você votou no restaurante!',
        });

        setCanEnjoy(false);
      } catch (err) {
        const { response } = err;

        let message = 'Ocorreu um erro ao fazer sua escolha, tente novamente.';

        if (response && response.data) {
          const dataErr = response.data;

          message = dataErr.message;
          formRef.current?.setErrors({ email: message });
        }

        addToast({
          type: 'error',
          title: 'Erro na escolha',
          description: message,
        });
      } finally {
        setLoading(false);
      }
    }, [setCanEnjoy, addToast],
  );

  const handleSignOut = useCallback(
    async (e) => {
      e.preventDefault();

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

  const handleGoToDashboard = useCallback(
    async (e) => {
      e.preventDefault();

      confirmAlert({
        title: 'Sair e ver o dashboard',
        message: 'Você tem certeza de quer sair?',
        buttons: [
          {
            label: 'Sim',
            onClick: () => {
              signOut();

              history.push('/dashboard');
            },
          },
          {
            label: 'Não',
            onClick: () => false,
          },
        ],
      });
    }, [signOut, history],
  );

  useEffect(
    () => {
      api
        .get<IRestaurant[]>('/restaurants')
        .then((response) => {
          setRestaurants(response.data);
        });
    },
    [],
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

          <Form ref={formRef} autoComplete="off" onSubmit={handleCreate}>
            <Input
              name="name"
              icon={FiAward}
              placeholder="Sugestão de Restaurante"
            />

            <BtnMedium
              type="submit"
              loading={loading}
              textTitleTootip="Adicione um novo restaurante"
            >
              <FiPlus size={40} color="##666360" />
            </BtnMedium>

            <BtnMedium
              type="button"
              loading={loading}
              textTitleTootip="Pesquise um restaurante, para recarregar limpe o campo"
              onClick={handleSeach}
            >
              <FiSearch size={40} color="##666360" />
            </BtnMedium>

            <BtnMedium
              type="button"
              loading={loading}
              textTitleTootip="Sair e ver o dashboard"
              onClick={handleGoToDashboard}
            >
              <FiBarChart size={40} color="##666360" />
            </BtnMedium>

            <BtnMedium
              type="button"
              loading={loading}
              textTitleTootip="Fechar e voltar para home"
              onClick={handleSignOut}
            >
              <FiPower size={40} color="##666360" />
            </BtnMedium>
          </Form>

          <ListContainer>
            {restaurants.length === 0 && (
              <ItemNotFound>
                Nenhum restaurante encontrado
              </ItemNotFound>
            )}

            {/* {restaurants.map((restaurant) => (
              (restaurant.attempts > 0)
                ? (
                  <ItemContent key={restaurant.id}>
                    <div>{restaurant.name}</div>
                    <div>
                      <b>Este Restaurante</b> já foi escolhido <b>{restaurant.attempts}</b> vezes
                    </div>
                    <div>
                      <BtnSmall
                        onClick={() => handleLiked(restaurant)}
                        hidden={!canEnjoy}
                      >
                        <FiThumbsUp size={20} color="##666360" />
                      </BtnSmall>
                    </div>
                  </ItemContent>
                )
                : (
                  <ItemContent key={restaurant.id}>
                    <div>{restaurant.name}</div>
                    <div>{restaurant.description}</div>
                    <div>
                      <BtnSmall
                        onClick={() => handleLiked(restaurant)}
                        hidden={!canEnjoy}
                      >
                        <FiThumbsUp size={20} color="##666360" />
                      </BtnSmall>
                    </div>
                  </ItemContent>
                )
            ))} */}
          </ListContainer>
        </Section>

        {/* <Link to="/" onClick={handleSignOut}>
          <FiX /> Fechar e sair
        </Link> */}
      </Content>

      <Footer text="©2021 - DBServer - Todos os direitos reservados." />
    </Container>
  );
};

export default Choose;
