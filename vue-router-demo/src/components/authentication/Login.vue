<template>
  <div>
      Login View
      <button @click="login">Login</button>
  </div>
</template>

<script>
import requester from '@/plugins/requester.js';

export default {
  name: 'Login',
  methods: {
    login() {
      // Login using fetch/axios/vue-resource
      this.test();
      this.$router.push('home');
    }
  },
  mixins: [ requester ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
