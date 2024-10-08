// create the Vue JS app
const app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count += 1;
    },
    decrement() {
      this.count -= 1;
    },
    reset() {
      this.count = 0;
    },
  },
});

// connect the Vue JS app to the HTML file
app.mount("#app");
