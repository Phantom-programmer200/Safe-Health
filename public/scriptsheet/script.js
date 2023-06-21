let app = Vue.createApp({});
app.component("login-form", {
  template: `
    <form action="/login" method="POST">
    <h2>{{title}}</h2>
    <custom1-input  name='email' type='email' v-model='email'/>
    <custom2-input  name='password' type='password' v-model='password'/>
    <button class='button'>LOGIN</button>
    </form>
    `,
  component: ["custom1-input"],
  component: ["custom2-input"],
  data() {
    return {
      title: "",
      email: "",
      password: "",
    };
  },
});
app.component("custom1-input", {
  template: `
    <input class='email' name='email' type='email' placeholder='EMAIL' v-model='inputvalue'/>
    `,
  data() {
    return {
      inputvalue: "",
    };
  },
});
app.component("custom2-input", {
  template: `
      <input class='password' name='password' type='password' placeholder='PASSWORD' v-model='inputvalue'/>
      `,
  data() {
    return {
      inputvalue: "",
    };
  },
});
app.mount("#app");

let app2 = Vue.createApp({});
app2.component("register-form", {
  template: `
    <form action="/register" method="POST">
    <h2>{{title}}</h2>
    <custom3-input  name='name' type='username' v-model='username'/>
    <custom1-input  name='email' type='email'  v-model='email'/>
    <custom2-input  name='password' type='password' v-model='password'/>
    <button class='button' type="submit">REGISTER</button>
    </form>
    `,
  component: ["custom3-input"],
  component: ["custom1-input"],
  component: ["custom2-input"],
  data() {
    return {
      title: "",
    };
  },
});
app2.component("custom3-input", {
  template: `
      <input class='username' name='name' type='username' placeholder='USERNAME' v-model='inputvalue'/>
      `,
  data() {
    return {
      inputvalue: "",
    };
  },
});
app2.component("custom1-input", {
  template: `
    <input class='email' name='email' type='email' placeholder='EMAIL' v-model='inputvalue'/>
    `,
  data() {
    return {
      inputvalue: "",
    };
  },
});
app2.component("custom2-input", {
  template: `
      <input class='password' name='password' type='password' placeholder='PASSWORD' v-model='inputvalue'/>
      `,
  data() {
    return {
      inputvalue: "",
    };
  },
});
app2.mount("#app2");
