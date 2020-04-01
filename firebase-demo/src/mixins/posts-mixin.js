import axiosDb from '@/axios-database';

export default {
    data: function() {
        return { 
            posts: []
         }
    },
    methods: {
        async getAllPosts() {
            try {
                const res = await axiosDb.get(`posts.json`);
                const allPostsRes = res.data;
                for (const postId in allPostsRes) {
                  this.posts.push({
                    postId,
                    ...allPostsRes[postId]
                  });
                }
            } catch(err) {
                console.log(err);
            }
        }
    }
}