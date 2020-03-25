<template>
  <div id="app">
    <Header />
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/about">About</router-link>
      <router-link :to="{ name: 'product', params: { id: productId } }">Product</router-link>
    </nav>

    <router-view></router-view>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/shared/Header.vue';
import Footer from '@/components/shared/Footer.vue';

export default {
  name: 'App',
  data: function() {
    return {
      productId: 5
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
