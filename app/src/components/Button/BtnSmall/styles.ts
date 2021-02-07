import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #99bbff;
  height: 26px;
  border-radius: 6px;
  border: 1px solid #0055ff;
  padding: 0 4px;
  color: #666360;
  width: 100%;
  font-weight: 300;
  transition: background-color 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => props.hidden
    && css`
      display: none;
    `}

  &:hover {
    background: ${shade(0.2, '#80aaff')};
    color: #fff;
  }

  svg {
    width: 16px;
    height: 16px;
    margin-right: 3px;
  }
`;
