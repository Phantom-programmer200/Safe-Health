const app = Vue.createApp({
  data() {
    return {
      weight: 0,
      weights: [],
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    addWeight() {
      this.weights.push(this.weight);
      this.updateChart();
      this.weight = 0;
    },
    initChart() {
      this.chart = new Chart("chart", {
        type: "line",
        data: {
          labels: [],
          datasets: [
            {
              label: "Weight",
              data: [],
              borderColor: "blue",
              backgroundColor: "rgba(0, 0, 255, 0.1)",
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    },
    updateChart() {
      this.chart.data.labels = this.weights.map(
        (_, index) => `Month ${index + 1}`
      );
      this.chart.data.datasets[0].data = this.weights;
      this.chart.update();
    },
  },
});
app.mount("#app");
