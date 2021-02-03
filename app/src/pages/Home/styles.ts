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

  h3 {
    font-weight: bold;
    text-align: center;
  }

  p {
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 500;

    b {
      padding: 0 5px 0 5px;
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 398px;
  padding: 2em;
`;

export const SectionHeader = styled.header`
  border: 1px dashed #ccc;
  padding: 12px;
  margin-bottom: 10px;
`;

export const SectionArticle = styled.article`
  padding: 12px 50px 12px 50px;
  margin-top: 20px;
`;

export const SectionFooter = styled.footer`
  padding: 10px;
  margin: 25px 0 25px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  a {
    text-decoration:none;
    padding: 80px;
    background: #99bbff;
    height: 56px;
    border-radius: 10px;
    border: 1px solid #0055ff;
    color: #666360;
    text-align: center;
    width: 100%;
    font-weight: 500;
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
      width: 20px;
      height: 20px;
      margin-right: 3px;
    }
  }

  a:last-child {
    margin-left: 25px;
  }
`;
