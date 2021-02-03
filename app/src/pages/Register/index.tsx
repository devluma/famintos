import React, { useRef, useCallback } from 'react';
import Select, { components } from 'react-select';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { FiArrowLeft, FiSave, FiMail, FiUser, FiAward } from 'react-icons/fi';
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

  const customStyleSelect = {
    control: (base: any, state: any) => ({
      ...base,
      padding: "6px",
      background: "#d9d9d9",
      color: state.isFocused ? "#666360" : "#004de6",
      borderRadius: state.isFocused ? "5px" : 10,
      borderColor: state.isFocused ? "#cccccc" : "#d9d9d9",
      border: "2px solid #ccc",
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        borderColor: state.isFocused ? "#0055ff" : "#d9d9d9",
      },
    }),
  };

  const teams = [
    { value: 'team-developers', label: 'Equipe do Desenvolvimento' },
    { value: 'team-devops', label: 'Equipe de DevOps' },
    { value: 'team-rh', label: 'Equipe do RH' },
  ];

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
            <Input name="suggestion" icon={FiAward} placeholder="Sugestão de Restaurante" />
            <Input name="name" icon={FiUser} placeholder="Nome do Colaborador" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Select options={teams} styles={customStyleSelect} placeholder="Selecione seu Time" />

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
