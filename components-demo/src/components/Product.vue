<template>
   <div>
        <slot name="type"></slot>
        <slot name="price"></slot>
        <slot name="ingredients"></slot>
   </div>
</template>

<script>
export default {
  name: 'Product',
//   props: {
//       mealType: {
//           type: String,
//           required: true
//       },
//       price: Number,
//       ingredients: {
//           type: Array,
//           validator: (arr) => {
//               return arr.every((i) => typeof i === 'string');
//           }
//       },
//       expirationDate: {
//           type: Date,
//           default: () => new Date()
//       }
//   },
  data: function() {
      return {
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
    list-style: none;
}
</style>
