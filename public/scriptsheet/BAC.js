const app = Vue.createApp({
  data() {
    return {
      weight: null,
      gender: "male",
      drinks: null,
      hours: null,
      BAC: null,
    };
  },
  methods: {
    calculateBAC: function () {
      if (this.weight && this.gender && this.drinks && this.hours) {
        let genderConstant = 0.68;
        if (this.gender === "female") {
          genderConstant = 0.55;
        }

        const alcoholGrams = this.drinks * 14;
        const bodyWater = this.weight * genderConstant;
        const metabolicRate = bodyWater * 0.017;
        const elimination = metabolicRate * this.hours;
        const BAC = alcoholGrams / (this.weight * 1000) - elimination;

        this.BAC = BAC;
      }
    },
  },
  computed: {
    BACCondition: function () {
      if (this.BAC !== null) {
        if (this.BAC >= 0.08) {
          return "High blood alcohol concentration (BAC)";
        } else {
          return "Normal blood alcohol concentration (BAC)";
        }
      } else {
        return "";
      }
    },
  },
});
app.mount("#app");
