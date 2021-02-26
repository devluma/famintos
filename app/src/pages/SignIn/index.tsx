import React, { useRef, useCallback, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { FiArrowLeft, FiUnlock, FiMail, FiCompass } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Content, Section } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

interface SignInFormData {
  name: string;
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string().required('E-mail é obrigatório').email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        addToast({
          type: 'success',
          title: 'Login realizado!',
          description: 'Você já pode votar em um restaurante disponível!',
        });
      } catch (err) {
        const { response } = err;

        let message = 'Ocorreu um erro ao fazer login, tente novamente.';

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
          title: 'Erro na autenticação',
          description: message,
        });
      } finally {
        setLoading(false);
      }
    },
    [signIn, addToast],
  );

  return (
    <Container>
      <Header title="Autenticar o Colaborador" />

      <Content>
        <Section>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input type="email" name="email" icon={FiMail} placeholder="E-mail" />

            <Input type="password" name="password" icon={FiCompass} placeholder="Senha" />

            <Button type="submit" loading={loading}>
              <FiUnlock /> Entrar
            </Button>
          </Form>
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

export default SignIn;
