const app = Vue.createApp({
  data() {
    return {
      weight: null,
      height: null,
      bmi: null,
    };
  },
  methods: {
    calculateBMI: function () {
      if (this.weight && this.height) {
        const heightInMeters = this.height / 100;
        this.bmi = this.weight / (heightInMeters * heightInMeters);
      }
    },
  },
  computed: {
    bmiCategory: function () {
      if (this.bmi === null) {
        return "";
      } else if (this.bmi < 18.5) {
        return "Underweight";
      } else if (this.bmi < 25) {
        return "Normal weight";
      } else {
        return "Overweight";
      }
    },
  },
});
app.mount("#app");
