<template>
  <div>
      Product Details View
      {{productId}}
      <button @click="displayId">Display</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function() {
      return {
          productId: this.$route.params.id
      }
  },
  methods: {
      displayId() {
          console.log(this.productId);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
