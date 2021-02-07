import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  hidden?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, hidden = false, ...rest }) => (
  <Container type="button" hidden={hidden} {...rest}>
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;
