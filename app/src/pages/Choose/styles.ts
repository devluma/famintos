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
      margin: 0px 4px 0px 4px;
    }
  }
`;

export const Section = styled.section`
  height: 398px;
  padding: 2em;
  display: flex;
  flex-flow: column;

  > h3 {
    font-weight: bold;
    text-align: center;
    padding-bottom: 18px;
  }

  form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;

    /* button {
      border-radius: 8px;
      border: 2px solid #ccc;
      margin-left: 10px;
      padding: 4px;
    } */
  }
`;

export const ListContainer = styled.ul`
  border-radius: 10px;
  border: 2px solid #ccc;
  padding: 8px;
  margin: 0px 2px 0px 2px;
  overflow-x: hidden;
  overflow-y: scroll;
  white-space: nowrap;
  display: block;
  list-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ItemContent = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  background: #f2f2f2;
  padding: 5px 10px 5px 10px;
  margin-bottom: 4px;
  border: 2px solid #ccc;
  border-radius: 8px;
`;
