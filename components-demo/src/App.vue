<template>
  <div id="app">
    <button @click="selectedComponent = 'HelloWorld'">Render Hello World</button>
    <button @click="selectedComponent = 'ProductList'">Render Product List</button>
    <keep-alive>
      <component :is="selectedComponent" 
        msg="Welcome to Your Vue.js App" 
        :products="products"
        :title="title"
        @onChangeTitle="title = $event"
        >
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" />
        <ProductList :products="products" :title="title" @onChangeTitle="title = $event" /> -->
      </component>
    </keep-alive>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ProductList from "./components/ProductList.vue";

export default {
  name: "App",
  data: function() {
    return {
      counter: 0,
      products: [
        {
          type: "Spaghetti",
          price: 11,
          ingredients: ["Pasta", "Meatballs", "Sauce"]
        },
        {
          type: "Musaka",
          price: 6,
          ingredients: ["Potatoes", "Mince", "Eggs"]
        },
        {
          type: "Pancakes",
          price: 4,
          ingredients: ["Eggs", "Flour", "Milk"]
        }
      ],
      title: "This is my product list!",
      selectedComponent: "HelloWorld"
    };
  },
  watch: {
    title(oldValue, newValue) {
      console.log([oldValue, newValue]);
    }
  },
  components: {
    HelloWorld,
    ProductList
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
