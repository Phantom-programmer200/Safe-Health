const app = Vue.createApp({
  data() {
    return {
      weight: null,
      reps: null,
      oneRepMax: null,
    };
  },
  methods: {
    calculateOneRepMax: function () {
      if (this.weight && this.reps) {
        const oneRepMax = this.weight * (1 + this.reps / 30);

        this.oneRepMax = oneRepMax.toFixed(2);
      }
    },
  },
  computed: {
    oneRepMaxCondition: function () {
      if (this.oneRepMax !== null) {
        if (this.oneRepMax < 50) {
          return "Low one rep max";
        } else if (this.oneRepMax >= 50 && this.oneRepMax <= 100) {
          return "Normal one rep max";
        } else {
          return "High one rep max";
        }
      } else {
        return "";
      }
    },
  },
});
app.mount("#app");
