<template>
  <div id="home">
      <div v-if="isAuth">
        Hello to the Page (authenticated)
        <p v-for="p in posts" :key="p.postId">
          {{p.name}}
        </p>
      </div>
      <div v-else>
        Hello to the Page (not authenticated)
      </div>
  </div>
</template>

<script>
import postsMixin from '@/mixins/posts-mixin';

export default {
  props: {
    isAuth: Boolean
  },
  data: function() {
    return {
    }
  },
  name: 'Home',
  beforeCreate() {
    this.$emit('onAuth', localStorage.getItem('token') !== null);
  },
  created() {
    this.getAllPosts();
  },
  mixins: [postsMixin]
}
</script>

<style>

</style>
