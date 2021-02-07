import React, { useRef, useCallback, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { FiSave, FiMail, FiUser, FiCompass, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import {
  Container,
  Content,
  Section,
  ButtonGroup,
} from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import api from '../../services/api';

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: RegisterFormData) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data).catch((err) => Promise.reject(err));

        history.push('/signin');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode votar em um restaurante disponível!',
        });
      } catch (err) {
        const { response } = err;

        let message = 'Ocorreu um erro ao fazer cadastro, tente novamente.';

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        if (response && response.data) {
          const dataErr = response.data;

          message = dataErr.message;
          formRef.current?.setErrors({ email: message });
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: message,
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Header title="Registrar um Colaborador" />

      <Content>
        <Section>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              icon={FiUser}
              placeholder="Nome do Colaborador"
            />

            <Input
              type="email"
              name="email"
              icon={FiMail}
              placeholder="E-mail"
            />

            <Input
              type="password"
              name="password"
              icon={FiCompass}
              placeholder="Senha"
            />

            <Button type="submit" loading={loading}>
              <FiSave /> Registrar
            </Button>
          </Form>
        </Section>

        <ButtonGroup>
          <Link to="/">
            <FiArrowLeft />
            Voltar para a home
          </Link>

          <Link to="/signin">
            Fazer login
            <FiArrowRight />
          </Link>
        </ButtonGroup>
      </Content>

      <Footer text="©2021 - DBServer - Todos os direitos reservados." />
    </Container>
  );
};

export default Register;
