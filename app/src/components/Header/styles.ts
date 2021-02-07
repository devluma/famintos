import styled from 'styled-components';

export const Container = styled.header`
  padding: 10px 0px 12px 0px;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    height: 90px;
  }

  > div {
    padding: 5px;
    margin-left: 5px;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;

    h1 {
      padding-bottom: 5px;
    }

    span {
      text-align: right;

      b {
        color: green;
        padding: 0 2px 0 2px;
      }
    }
  }
`;
