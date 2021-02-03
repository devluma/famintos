import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    padding-bottom: 24px;
  }
`;

export const Content = styled.main`
  width: 100%;
  height: 100%;
  min-height: 100%;
  max-width: 1120px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #fff;

  a {
    color: #666360;
    display: block;
    margin-bottom: 24px;
    text-decoration: none;
    transition: color 0.2s;

    /* flex para alinhar conteúdo*/
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#c53030')};
    }

    svg {
      width: 20px;
      height: 20px;
      margin-right: 3px;
    }
  }
`;

export const Section = styled.section`
  height: 398px;
  padding: 2em;
  display: flex;
  flex-flow: column;

  h3 {
    font-weight: bold;
    text-align: center;
    padding-bottom: 18px;
  }
`;

export const ListContainer = styled.ul`
  overflow-x: hidden;
  overflow-y: scroll;
  white-space: nowrap;
  width: 100%;
  height: 100%;
  margin-top: 25px;
  margin-bottom: 20px;
  display: block;
  list-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ItemContent = styled.li`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  background: #f2f2f2;
  padding: 12px;
  margin-bottom: 4px;
  border: 2px solid #ccc;
  border-radius: 8px;
  position: relative;

  strong {
    font-size: 16px;
    font-weight: bold;
    margin-right: 5px;
    padding: 5px;
  }

  span {
    text-align: center;
    font-size: 12px;
    padding: 8px;
  }

  p {
    width: 100%;
    text-align: left;
    font-size: 12px;
    font-style: italic;
    margin-left: 5px;
    margin-right: 5px;
    padding: 8px;
  }

  div {
    margin-left: 5px;
    padding: 5px;
  }

  div > button {
    cursor: pointer;
    outline: none;
    border-radius: 4px;
    border: 0px;

    &:hover {
      background: ${shade(0.2, '#d6f5d6')};
      color: #d6f5d6;
    }
  }
`;
