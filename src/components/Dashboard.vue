<template>
  <div>
    <h1>THIS IS THE DASHBOARD PAGE</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  props: ['firebase'],
  methods: {
    logout() {
      const V = this;
      V.firebase.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((err) => {
        console.error(err);
      });
    },
  },
};
</script>

<style>

</style>
