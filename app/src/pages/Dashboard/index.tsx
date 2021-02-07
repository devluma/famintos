import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";

import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import {
  Container,
  Content,
  Section,
  GraphContainer,
  ButtonGroup,
} from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import IRestaurant from '../../interfaces/Restaurant';

const Dashboard: React.FC = () => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const history = useHistory();

  const apexCharts = {
    optionsBar: {
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: [
          "Restaurante 1",
          "Restaurante 2",
          "Restaurante 3",
          "Restaurante 4",
          "Restaurante 5",
          "Restaurante 6",
        ],
      },
    },
    seriesBar: [
      {
        name: "Pontuação",
        data: [10, 20, 40, 60, 110, 112],
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

  useEffect(() => {

  }, []);

  return (
    <Container>
      <Header
        title="Dashboard do Vencedor"
        description="O restaurante vencedor de hoje foi o <b>Restaurante do Tio João</b>"
      />

      <Content>
        <Section>
          <h3>Lista dos Restaurantes Vencedores</h3>
          <GraphContainer>
            <section>
              <header>
                <h2>Escolha por Pontos</h2>
              </header>
              <article>
                <Chart
                  key="of-total-points"
                  options={apexCharts.optionsBar}
                  series={apexCharts.seriesBar}
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
                  options={apexCharts.optionsRadial}
                  series={apexCharts.seriesRadial}
                  type="radialBar"
                />
              </article>
            </section>
          </GraphContainer>
        </Section>

        <ButtonGroup>
          <Link to="/">
            <FiArrowLeft />
            Votar para a home
          </Link>
        </ButtonGroup>
      </Content>

      <Footer text="©2021 - DBServer - Todos os direitos reservados." />
    </Container>
  );
};

export default Dashboard;
