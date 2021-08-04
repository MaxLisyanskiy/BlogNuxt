<template>
  <div class="wrapper-content wrapper-content--fixed">
      <section class="about">
          <div class="container">
                <h1 class="title">About my blog:</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error magni ipsa placeat eos dolorum, molestias explicabo atque, consequuntur, suscipit rerum odio. Doloribus nobis impedit corrupti inventore in culpa veniam recusandae.</p>
                <intro title="About" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error magni ipsa placeat eos dolorum, molestias explicabo atque, consequuntur, suscipit rerum odio. Doloribus nobis impedit corrupti inventore in culpa veniam recusandae.</p>
                <img src="@/assets/img/about.jpg" alt="">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error magni ipsa placeat eos dolorum, molestias explicabo atque, consequuntur, suscipit rerum odio. Doloribus nobis impedit corrupti inventore in culpa veniam recusandae.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error magni ipsa placeat eos dolorum, molestias explicabo atque, consequuntur, suscipit rerum odio. Doloribus nobis impedit corrupti inventore in culpa veniam recusandae.</p>
          </div>
      </section>
  </div>
</template>

<script>
import Intro from '@/components/UI/Intro'
export default {
    components: {Intro}
}
</script>

<style lang="scss">
    .about{
        text-align: center;
        p {
            margin-bottom: 10px;
        }
    }
</style>