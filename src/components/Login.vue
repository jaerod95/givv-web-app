<template>
  <div class="login-wrapper">
    <form class="form" @submit.prevent="login">
      <input class="input" v-model="email" type="text" placeholder="email">
      <input class="input" v-model="password" type="password" placeholder="password">
      <p v-if="error_message != ''">{{error_message}}</p>
      <button type="submit">Login</button>
      <p>Don't have an account?
        <span @click="toggle"> Create an account</span>
      </p>
    </form>
    <form class="form hidden" @submit.prevent="register">
      <input class="input" v-model="email" type="text" placeholder="email">
      <input class="input" v-model="password" type="password" placeholder="password">
      <p v-if="error_message != ''">{{error_message}}</p>
      <button type="submit">Register</button>
      <p>Already have an account?
        <span @click="toggle"> Create an account</span>
      </p>
    </form>
  </div>
</template>

<script>
/* global $ */
export default {
  props: ['firebase'],
  data() {
    return {
      email: '',
      password: '',
      error_message: '',
    };
  },
  methods: {
    login() {
      const V = this;
      V.error_message = '';
      V.firebase.auth().signInWithEmailAndPassword(V.email, V.password).catch((err) => {
        V.error_message = err.message;
      });
    },
    toggle() {
      $('.form').toggleClass('hidden');
    },
    register() {
      const V = this;
      V.error_message = '';
      V.firebase.auth().createUserWithEmailAndPassword(V.email, V.password).catch((err) => {
        V.error_message = err.message;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);
.login-wrapper {
  width: 100vw;
  height: 100vh;
  background: #76b852;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(right, #76b852, #8DC26F);
  background: -moz-linear-gradient(right, #76b852, #8DC26F);
  background: -o-linear-gradient(right, #76b852, #8DC26F);
  background: linear-gradient(to left, #76b852, #8DC26F);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .hidden {
    height: 0;
    display: none;
    animation: 1s height;
    animation: 1s display;
  }
  .form {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    background: #FFFFFF;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    .input {
      font-family: "Roboto", sans-serif;
      outline: 0;
      background: #f2f2f2;
      width: 100%;
      border: 0;
      margin: 0 0 15px;
      padding: 15px;
      box-sizing: border-box;
      font-size: 14px;
    }
    button {
      font-family: "Roboto", sans-serif;
      text-transform: uppercase;
      outline: 0;
      background: #4CAF50;
      width: 100%;
      border: 0;
      padding: 15px;
      color: #FFFFFF;
      font-size: 14px;
      -webkit-transition: all 0.3 ease;
      transition: all 0.3 ease;
      cursor: pointer;
    }
  }
}
</style>
