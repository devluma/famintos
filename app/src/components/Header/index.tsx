import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  title: string;
  description?: string;
  logoImgSrc?: string;
  logoImgAlt?: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  description,
  className = '',
  logoImgSrc = logoImg,
  logoImgAlt = 'Faminto',
  children,
}) => (
  <Container className={className}>
    <Content>
      <img src={logoImgSrc} alt={logoImgAlt} />

      <div>
        <h1>{title}</h1>
        <span>{ReactHtmlParser(description || '')}</span>
      </div>

      {children}
    </Content>
  </Container>
);

export default Header;
