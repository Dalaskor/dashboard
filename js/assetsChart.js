const assetsChartElem = document.getElementById('assetsDoughnut').getContext('2d');

const assetsData = {
  labels: ['BTC', 'ETH', 'ADA', 'Others'],
  datasets: [
    {
      label: 'Assets',
      data: [800, 300, 200, 100],
      backgroundColor: ['#2F80ED', '#B1D3FF', '#00C4DF', '#155AB6'],
    }
  ]
};

const assetsConfig = {
    type: 'doughnut',
    data: assetsData,
    options: {
      responsive: false,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        }
      }
    },
  };

const assetsChart = new Chart(assetsChartElem, assetsConfig);