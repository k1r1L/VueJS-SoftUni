<template>
  <footer>
      Firebase Demo @ SoftUni {{getYear}}
  </footer>
</template>

<script>

export default {
  name: 'Footer',
  computed: {
    getYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style>
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgb(10, 63, 207);
  color: white;
  text-align: center;
}
</style>
