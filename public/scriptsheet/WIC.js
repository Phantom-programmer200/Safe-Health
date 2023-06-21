const app = Vue.createApp({
  data() {
    return {
      weight: null,
      activityLevel: "sedentary",
      waterIntake: null,
    };
  },
  methods: {
    calculateWaterIntake: function () {
      if (this.weight && this.activityLevel) {
        let multiplier = 0;

        switch (this.activityLevel) {
          case "sedentary":
            multiplier = 30;
            break;
          case "light":
            multiplier = 35;
            break;
          case "moderate":
            multiplier = 40;
            break;
          case "active":
            multiplier = 45;
            break;
          case "veryActive":
            multiplier = 50;
            break;
        }

        const waterIntake = (this.weight * multiplier) / 1000;

        this.waterIntake = waterIntake;
      }
    },
  },
  computed: {
    waterIntakeCondition: function () {
      if (this.waterIntake !== null) {
        if (this.waterIntake < 2) {
          return "Low water intake";
        } else if (this.waterIntake >= 2 && this.waterIntake <= 3) {
          return "Normal water intake";
        } else {
          return "High water intake";
        }
      } else {
        return "";
      }
    },
  },
});
app.mount("#app");
