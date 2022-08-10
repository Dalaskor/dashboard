const bitcoinChartElem = document.getElementById('bitcoinChart').getContext('2d');

const bitcoinData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    datasets: [{
        label: 'Bitcoin',
        data: [30, 20, 28, 17, 40, 42, 50, 45, 48, 30, 55],
        fill: false,
        borderColor: '#F0C98C',
        tension: 0.5,
        pointBackgroundColor: 'rgba(0, 0, 0, 0)',
        pointBorderColor: 'rgba(0, 0, 0, 0)',
        pointHoverBackgroundColor: 'rgba(0, 0, 0, 0.1)',
        pointHoverBorderColor: 'rgba(0, 0, 0, 0.1)',
    }],
};

const bitcoinConfig = {
    type: 'line',
    data: bitcoinData,
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

const bitcoinChart = new Chart(bitcoinChartElem, bitcoinConfig);