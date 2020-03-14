<template>
  <div>
    <p>{{title}}</p>
    <input type="text" :value="title" @input="changeTitle" />
    <Product
      v-for="(p, i) in products"
      :key="i">
        <h2 slot="type">Type: {{p.type}}</h2>
        <div slot="price">Price: {{p.price}}</div>
        <ul slot="ingredients">
            <li v-for="(ing, i2) in p.ingredients" :key="i2">{{ing}}</li>
        </ul>
    </Product>
  </div>
</template>

<script>
import Product from "./Product.vue";
export default {
  name: "ProductList",
  props: {
      title: String,
      products: {
          type: Array,
          validator(arr) {
              // Checkk all properties
              return arr.every(p => typeof p.type === 'string' 
                && typeof p.price === 'number' 
                && Array.isArray(p.ingredients) )
          }
      }
  },
  data: function() {
    return {};
  },
  methods: {
    changeTitle(e) {
      const value = e.target.value;

      this.$emit("onChangeTitle", value);
    }
  },
  components: {
    Product
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
