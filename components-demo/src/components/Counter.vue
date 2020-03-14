<template>
  <button @click="counter++"> Counter:{{ counter }}</button>
</template>

<script>
export default {
  name: 'Counter',
  props: {
      counter: Number
  },
  data: function() {
      return {
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
