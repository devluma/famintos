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
      color: ${shade(0.2, '#80aaff')};
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

  h3 {
    font-weight: bold;
    text-align: center;
    padding-bottom: 18px;
  }

  span {
    text-align: right;

    b {
      color: green;
      padding: 0 5px 0 5px;
    }
  }
`;

export const GraphContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 25px;
  margin-bottom: 20px;

  /* flex para alinhar conteúdo*/
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  section {
    height: 300px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: stretch;

    header > h2 {
      font-weight: bold;
      text-align: center;
      padding-bottom: 18px;
    }

    article {
      padding: 10px;
    }
  }
`;
