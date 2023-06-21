const app = Vue.createApp({
  data() {
    return {
      age: null,
      restingHeartRate: null,
      targetHeartRate: null,
    };
  },
  methods: {
    calculateTargetHeartRate: function () {
      if (this.age && this.restingHeartRate) {
        const maxHeartRate = 220 - this.age;
        const targetHeartRateMin = Math.round(
          0.5 * (maxHeartRate - this.restingHeartRate) + this.restingHeartRate
        );
        const targetHeartRateMax = Math.round(
          0.85 * (maxHeartRate - this.restingHeartRate) + this.restingHeartRate
        );
        this.targetHeartRate = `${targetHeartRateMin} - ${targetHeartRateMax}`;
      }
    },
  },
  computed: {
    targetHeartRateCondition: function () {
      if (this.targetHeartRate !== null) {
        const [min, max] = this.targetHeartRate.split(" - ");
        if (max <= 120) {
          return "Normal heart rate";
        } else {
          return "High heart rate";
        }
      } else {
        return "";
      }
    },
  },
});
app.mount("#app");
