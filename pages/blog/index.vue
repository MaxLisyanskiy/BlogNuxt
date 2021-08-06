<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="My posts: "/>

    <!-- posts: -->
    <PostsList :posts="posts"/>
  </div>
</template>

<script>
import Intro from '@/components/UI/Intro'
import PostsList from '@/components/Blog/PostsList'

export default {
  components: {
    Intro,
    PostsList
  },
  data () {
    return {
      posts: [
        {
          id: 1,
          title: '1 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: 'https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg'
        },
        {
          id: 2,
          title: '2 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: 'https://iheartdogs.com/wp-content/uploads/2017/09/Brite-Bite-0021-2.jpg'
        },
        {
          id: 3,
          title: '3 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: 'https://cdn.fishki.net/upload/post/2020/01/06/3192096/tn/sobaka.png'
        }
      ]
    }
  }

}
</script>
