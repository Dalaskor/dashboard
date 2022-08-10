const solChartElem = document.getElementById('solanaChart').getContext('2d');

const solData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    datasets: [{
        label: 'Bitcoin',
        data: [23, 5, 54, 24, 6, 47, 27, 15, 23, 31, 21],
        fill: false,
        borderColor: '#F0A0A0',
        tension: 0.5,
        pointBackgroundColor: 'rgba(0, 0, 0, 0)',
        pointBorderColor: 'rgba(0, 0, 0, 0)',
        pointHoverBackgroundColor: 'rgba(0, 0, 0, 0.1)',
        pointHoverBorderColor: 'rgba(0, 0, 0, 0.1)',
    }],
};

const solConfig = {
    type: 'line',
    data: solData,
    options: {
        scales: {
            y: {
                display: false,
            },
            x: {
                display: false,
            },
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    },
};

const solChart = new Chart(solChartElem, solConfig);