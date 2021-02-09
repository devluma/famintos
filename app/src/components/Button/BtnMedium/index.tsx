import React, { ButtonHTMLAttributes } from 'react';

import { Container, InfoTooltip } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  textTitleTootip?: string;
  hidden?: boolean;
};

const BtnMedium: React.FC<ButtonProps> = ({
  children,
  loading,
  textTitleTootip = '',
  hidden = false,
  ...rest
}) => (
  <Container type="button" hidden={hidden} {...rest}>
    <InfoTooltip title={textTitleTootip}>
      {loading ? 'Carregando...' : children}
    </InfoTooltip>
  </Container>
);

export default BtnMedium;
