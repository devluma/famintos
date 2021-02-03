import React from 'react';

import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  text: string;
  logoImgSrc?: string;
  logoImgAlt?: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  text,
  className = '',
  logoImgSrc = logoImg,
  logoImgAlt = 'Faminto',
  children,
}) => (
  <Container className={className}>
    <Content>
      <img src={logoImgSrc} alt={logoImgAlt} />

      <h1>{text}</h1>

      {children}
    </Content>
  </Container>
);

export default Header;
