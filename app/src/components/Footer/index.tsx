import React from 'react';

import { Container, Content } from './styles';

interface FooterProps {
  text: string;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({
  text,
  className = '',
  children,
}) => (
  <Container className={className}>
    <Content>
      {children}
      <span>{text}</span>
    </Content>
  </Container>
);

export default Footer;
