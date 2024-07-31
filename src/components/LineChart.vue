<template>
    <div class="chart-container">
      <LineChart :chart-data="chartData" :options="chartOptions" />
    </div>
  </template>

  <script>
  import { Line } from 'vue-chartjs';
  import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend } from 'chart.js';

  ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend);

  export default {
    components: {
      LineChart: Line
    },
    data() {
      return {
        chartData: {
          labels: ['January', 'February', 'March'],
          datasets: [
            {
              label: 'Data',
              backgroundColor: 'rgba(248, 121, 121, 0.2)',
              borderColor: '#f87979',
              pointBackgroundColor: '#f87979',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: '#f87979',
              data: [40, 20, 10]
            }
          ]
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              labels: {
                color: '#333',
                font: {
                  size: 16
                }
              }
            }
          }
        }
      };
    }
  };
  </script>

  <style scoped>
  .chart-container {
    position: relative;
    margin: auto;
    height: 50vh;
    width: 80vw;
  }
  </style>
