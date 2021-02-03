import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { FiArrowLeft, FiSave, FiMail, FiUser } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import {
  Container,
  Content,
  Section,
} from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface RegisterFormData {
  name: string;
  email: string;
}

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: RegisterFormData) => {
      try {
        formRef.current?.setErrors({});

        // Actions

        history.push('/choose');
      } catch (err) {
        // Error
      }
    },
    [history],
  );

  return (
    <Container>
      <Header text="Registrar um Colaborador" />

      <Content>
        <Section>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Button type="submit">
              <FiSave /> Salvar
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

export default Register;
