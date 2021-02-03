import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    padding-bottom: 24px;
  }

  h3 {
    font-weight: bold;
    text-align: center;
    padding-bottom: 18px;
  }
`;

export const Content = styled.main`
  /* max-width: 420px;
  margin: 0 auto;
  flex-direction: row;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #fff;
  justify-content: center;
  align-items: center; */

  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.section`
  /* height: 398px;
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center; */
`;
