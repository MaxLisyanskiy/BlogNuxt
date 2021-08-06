<template>
  <div class="wrapper-content wrapper-content--fixed">
      <Post :post="post" />
      <Comments :comments="comments" />
      <NewComment />
  </div>
</template>

<script>
import Post from "@/components/Blog/Post"
import Comments from "@/components/Comments/Comments"
import NewComment from "@/components/Comments/NewComment"


export default {
    components: {
        Post,
        Comments,
        NewComment
    },
    data() {
        return {
            post: {
                id: 1,
                title: '1 post',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                img: 'https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg',
                content: 'Lorem ipsum dolor sit amet'
            },
            comments: [
                { name: 'Alex', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
                { name: 'Max', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
            ]
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