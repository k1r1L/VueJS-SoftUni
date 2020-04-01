<template>
  <div id="app">
    <Header @onAuth="isAuth = $event" :isAuth="isAuth" />
      <router-view @onAuth="isAuth = $event" :isAuth="isAuth"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

export default {
  name: 'App',
  data: function() {
    return {
      isAuth: localStorage.getItem('token') !== null
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style>
</style>
