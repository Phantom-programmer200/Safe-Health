const app = Vue.createApp({
  data() {
    return {
      age: null,
      gender: "male",
      weight: null,
      height: null,
      activityLevel: "1.2",
      calories: null,
    };
  },
  methods: {
    calculateCalories: function () {
      if (
        this.age &&
        this.gender &&
        this.weight &&
        this.height &&
        this.activityLevel
      ) {
        let bmr = 0;

        if (this.gender === "male") {
          bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
        } else {
          bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
        }

        this.calories = Math.round(bmr * this.activityLevel);
      }
    },
  },
  computed: {
    calorieCondition: function () {
      if (this.calories === null) {
        return "";
      } else if (this.calories < 2000) {
        return "Low calorie intake";
      } else if (this.calories > 2500) {
        return "High calorie intake";
      } else {
        return "Normal calorie intake";
      }
    },
  },
});
app.mount("#app");
