const app = Vue.createApp({
  data() {
    return {
      days: 100,
      hours: 30,
      minutes: 24,
      seconds: 52,
      timerInterval: null,
    };
  },
  computed: {
    formattedTime() {
      const days = this.days.toString().padStart(2, "0");
      const hours = this.hours.toString().padStart(2, "0");
      const minutes = this.minutes.toString().padStart(2, "0");
      const seconds = this.seconds.toString().padStart(2, "0");
      return `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
    },
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    startTimer() {
      this.timerInterval = setInterval(() => {
        if (
          this.days === 0 &&
          this.hours === 0 &&
          this.minutes === 0 &&
          this.seconds === 0
        ) {
          clearInterval(this.timerInterval);
        } else {
          this.decreaseTime();
        }
      }, 1000);
    },
    decreaseTime() {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        if (this.minutes > 0) {
          this.minutes--;
          this.seconds = 59;
        } else {
          if (this.hours > 0) {
            this.hours--;
            this.minutes = 59;
            this.seconds = 59;
          } else {
            if (this.days > 0) {
              this.days--;
              this.hours = 23;
              this.minutes = 59;
              this.seconds = 59;
            }
          }
        }
      }
    },
  },
});
app.mount("#app");
