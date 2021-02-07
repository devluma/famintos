import { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #f2f2f2;
    color: #666360;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  footer {
    margin-top: auto;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  .react-confirm-alert-button-group button {
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

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {

  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {

  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {

  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {

  }
`;
