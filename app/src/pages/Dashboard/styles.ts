import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  width: 100%;
  /* height: 100%;
  min-height: 100%; */
  max-width: 1120px;
  padding: 20px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #fff;
`;

export const Section = styled.section`
  height: 100%;
  padding: 1em 0;
  display: flex;
  flex-flow: column;

  h3 {
    font-weight: bold;
    text-align: center;
    margin-bottom: 18px;
  }
`;

export const GraphContainer = styled.div`
  /* width: 100%;
  height: 100%; */
  margin-top: 25px;

  /* flex para alinhar conteúdo*/
  display: flex;
  justify-content: space-around;
  align-items: stretch;

  section {
    width: 100%;
    height: 100%;
    min-height: 100%;
    max-width: 100%;

    header > h2 {
      font-weight: bold;
      text-align: center;
      padding-bottom: 18px;
    }

    article {
      padding: 5px;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 4px 0px 4px;

  a {
    width: 100%;
    color: #666360;
    padding: 8px;
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
