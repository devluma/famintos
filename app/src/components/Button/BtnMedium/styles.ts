import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  margin-left: 10px;
  border-radius: 8px;
  border: 2px solid #ccc;
  padding: 6px;
  color: #666360;
  transition: background-color 0.2s;

  /* flex para alinhar conteúdo*/
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${shade(0.2, '#80aaff')};
    color: #fff;
  }

  svg {
    width: 40px;
    height: 40px;
    margin-right: 3px;
  }
`;
