import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #99bbff;
  height: 56px;
  border-radius: 10px;
  border: 1px solid #0055ff;
  padding: 0 16px;
  color: #666360;
  text-align: center;
  float: left;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.hidden &&
    css`
      display: none;
    `}

  &:hover {
    background: ${shade(0.2, '#80aaff')};
    color: #fff;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 3px;
  }
`;
