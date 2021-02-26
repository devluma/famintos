import styled, { css } from 'styled-components';
import { shade } from 'polished';

import Tooltip from '../../Tooltip';

export const Container = styled.button`
  margin-left: 10px;
  border-radius: 8px;
  border: 2px solid #ccc;
  padding: 6px;
  color: #666360;
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
    width: 40px;
    height: 40px;
    margin-right: 3px;
  }
`;

export const InfoTooltip = styled(Tooltip)`
  svg {
    width: 40px;
    height: 40px;
    margin-right: 3px;
  }

  span {
    background: #7f7ffc;
    color: #fff;

    &::before {
      border-color: #7f7ffc transparent;
    }
  }
`;
