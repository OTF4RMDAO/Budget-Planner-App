import React from 'react';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar'], // Monthly labels
        datasets: [
            {
                label: 'Income', // Name of the first dataset
                data: [1200, 1900, 3000], // Income values for each month
                backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar color for income
            },
            {
                label: 'Expenses', // Name of the second dataset
                data: [800, 1600, 2500], // Expenses values for each month
                backgroundColor: 'rgba(255, 99, 132, 0.6)', // Bar color for expenses
            },
        ],
    };

    return <Bar data={data} />; // Render the Bar chart with the data
};

export default Dashboard; // Export the component to be used elsewhere
