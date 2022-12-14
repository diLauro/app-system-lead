import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { purple } from '@mui/material/colors';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => Math.random() * 100),
        backgroundColor: purple[200],
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => Math.random() * 100),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
  export function DashboardLead() {
    return <Bar options={options} data={data} />;
  }
  