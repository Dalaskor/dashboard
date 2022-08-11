const courseChartElem = document.getElementById('courseChart').getContext('2d');

const labels = ['Jul 18', 'Jul 19', 'Jul 20', 'Jul 21', 'Jul 22'];
const courseData = {
  labels: labels,
  datasets: [
    {
      label: 'Bitcoin',
      data: [
        [20000, 25000],
        [21000, 27000],
        [10000, 15000],
        [13000, 36000],
        [15000, 25000],
        [20000, 21000],
        [20000, 21000],
      ],
      backgroundColor: '#3380FF',
    },
  ]
};

const courseConfig = {
    type: 'bar',
    data: courseData,
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
    }
  };

const courseChart = new Chart(courseChartElem, courseConfig);