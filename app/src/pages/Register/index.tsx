import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

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

import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

interface RegisterFormData {
  name: string;
  email: string;
  suggestion: string;
}

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: RegisterFormData) => {
      try {
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

        history.push('/choose');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode votar em um restaurante disponível!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Header text="Registrar um Colaborador" />

      <Content>
        <Section>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="suggestion"
              icon={FiAward}
              placeholder="Sugestão de Restaurante"
            />

            <Input
              name="name"
              icon={FiUser}
              placeholder="Nome do Colaborador"
            />

            <Input
              name="email"
              icon={FiMail}
              placeholder="E-mail"
            />

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
