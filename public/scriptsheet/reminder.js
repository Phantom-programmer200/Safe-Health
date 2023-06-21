const app = Vue.createApp({
  data() {
    return {
      newReminderText: "",
      reminders: [],
    };
  },
  methods: {
    addReminder() {
      const newReminder = {
        text: this.newReminderText,
        dateTime: new Date().toLocaleString(),
      };
      this.reminders.push(newReminder);
      this.newReminderText = "";
    },
    editReminder(index) {
      const newText = prompt("Enter new reminder text:");
      if (newText) {
        this.reminders[index].text = newText;
      }
    },
    removeReminder(index) {
      this.reminders.splice(index, 1);
    },
  },
});
app.mount("#app");
