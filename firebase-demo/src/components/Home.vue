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
import axiosDb from '@/axios-database';

export default {
  props: {
    isAuth: Boolean
  },
  data: function() {
    return {
      posts: []
    }
  },
  name: 'Home',
  beforeCreate() {
    this.$emit('onAuth', localStorage.getItem('token') !== null);
  },
  created() {
    axiosDb.get(`posts.json`, {
      name: 'Post 1',
      createdOn: new Date(),
      content: 'asfsdsdsdfsdfsd'
    }).then((res) => {
      const allPostsRes = res.data;
      for (const postId in allPostsRes) {
        this.posts.push({
          postId,
          ...allPostsRes[postId]
        });
      }
    }).catch((err) => {
      console.error(err);
    });
  }
}
</script>

<style>

</style>
