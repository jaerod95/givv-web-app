<template>
  <router-view :firebase="firebase" />
</template>

<script>
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD7crPd6Rjh8j4VBE2s5rMj1SsRGEOuAJ8',
  authDomain: 'givv-app-f3dec.firebaseapp.com',
  databaseURL: 'https://givv-app-f3dec.firebaseio.com',
  projectId: 'givv-app-f3dec',
  storageBucket: 'givv-app-f3dec.appspot.com',
  messagingSenderId: '604410246273',
};
firebase.initializeApp(config);

export default {
  data() {
    return {
      firebase,
    };
  },
  mounted() {
    const V = this;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        V.$router.push('/jj/dashboard'); // need to check the params here for see if trying to go to different route.
      } else {
        V.$router.push('/jj/login');
      }
    });
  },
};
</script>

<style>

</style>
