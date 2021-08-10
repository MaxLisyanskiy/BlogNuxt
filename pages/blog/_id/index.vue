<template>
  <div class="wrapper-content wrapper-content--fixed">
      <Post :post="post" />
      <Comments :comments="comments" />
      <NewComment :postId="$route.params.id" />
  </div>
</template>

<script>
import axios from 'axios'
import Post from "@/components/Blog/Post"
import Comments from "@/components/Comments/Comments"
import NewComment from "@/components/Comments/NewComment"

export default {
    components: {
        Post,
        Comments,
        NewComment
    },
    async asyncData(context) {
        let [post, comments] = await Promise.all([
            axios.get(`https://blog-nuxt-67ba8-default-rtdb.europe-west1.firebasedatabase.app/posts/${context.params.id}.json`),
            axios.get(`https://blog-nuxt-67ba8-default-rtdb.europe-west1.firebasedatabase.app/comments.json`)
        ])
        // let commentsArray = [],
        //     commentsArrayRes = []
        // Object.keys(comments.data).forEach(key => {
        //     commentsArray.push(comments.data[key])
        // })
        // for (let i=0; i < commentsArray.length; i++) {
        //     if(commentsArray[i].postId === context.params.id && commentsArray[i].publish === true) {
        //         commentsArrayRes.push(commentsArray[i])
        //     }
        // }
        let commentsArrayRes = Object.values(comments.data).filter( comment => (comment.postId === context.params.id) && comment.publish)

        return {
            post: post.data,
            comments: commentsArrayRes
        }
    }
}
</script>

<style lang="scss">
    .post {
        max-width: 900px;
        margin: 0 auto;

        &-header{
            text-align: center;
            margin-bottom: 30px;

            & p {
                color: #999;
            }
        }

        &-body {
            text-align: left;
        }
    }
</style>