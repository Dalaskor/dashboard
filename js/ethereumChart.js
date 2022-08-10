const ethChartElem = document.getElementById('ethereumChart').getContext('2d');

const ethData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    datasets: [{
        label: 'Bitcoin',
        data: [10, 5, 12, 11, 50, 21, 35, 30, 48, 30, 55],
        fill: false,
        borderColor: '#9181DB',
        tension: 0.5,
        pointBackgroundColor: 'rgba(0, 0, 0, 0)',
        pointBorderColor: 'rgba(0, 0, 0, 0)',
        pointHoverBackgroundColor: 'rgba(0, 0, 0, 0.1)',
        pointHoverBorderColor: 'rgba(0, 0, 0, 0.1)',
    }],
};

const ethConfig = {
    type: 'line',
    data: ethData,
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

const ethChart = new Chart(ethChartElem, ethConfig);