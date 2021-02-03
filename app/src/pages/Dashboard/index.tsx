import React from 'react';
import Chart from "react-apexcharts";
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import {
  Container,
  Content,
  Section,
  GraphContainer,
} from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Dashboard: React.FC = () => {
  const history = useHistory();

  const restaurants = ['Restaurante 1', 'Restaurante 2', 'Restaurante 3', 'Restaurante 4'];

  const state = {
    optionsBarLevel: {
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: restaurants,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
    },
    seriesBarLevel: [
      {
        name: "pontuação",
        data: [40, 30, 8, 10],
      },
    ],

    optionsbar: {
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: restaurants,
      },
    },
    seriesBar: [
      {
        name: "pontuação",
        data: [30, 40, 45, 50],
      },
    ],
    optionsRadial: {
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "70%",
            background: "#fff",
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24,
            },
          },
          track: {
            background: "#fff",
            strokeWidth: "67%",
            margin: 0,
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35,
            },
          },

          dataLabels: {
            showOn: "always",
            name: {
              offsetY: -20,
              show: true,
              color: "#888",
              fontSize: "13px",
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Vencedor"],
    },
    seriesRadial: [76],
  };

  return (
    <Container>
      <Header text="Dashboard dos Vencedores" />

      <Content>
        <Section>
          <h3>Lista dos Restaurantes Vencedores</h3>
          <span>O restaurante vencedor de hoje foi o <b>Restaurante do Tio João</b></span>
          <GraphContainer>
            <section>
              <header>
                <h2>Escolhas do Dia</h2>
              </header>
              <article>
                <Chart
                  key="of-the-day"
                  options={state.optionsBarLevel}
                  series={state.seriesBarLevel}
                  type="bar"
                />
              </article>
            </section>

            <section>
              <header>
                <h2>Total por Pontos</h2>
              </header>
              <article>
                <Chart
                  key="of-total-points"
                  options={state.optionsbar}
                  series={state.seriesBar}
                  type="bar"
                />
              </article>
            </section>

            <section>
              <header>
                <h2>Restaurante Escolhido</h2>
              </header>
              <article>
                <Chart
                  key="of-the-winner"
                  options={state.optionsRadial}
                  series={state.seriesRadial}
                  type="radialBar"
                />
              </article>
            </section>
          </GraphContainer>
        </Section>

        <Link to="/">
          <FiArrowLeft />
          Voltar para a home
        </Link>
      </Content>

      <Footer text="©2021 - DBServer - Todos os direitos reservados." />
    </Container>
  );
};

export default Dashboard;
