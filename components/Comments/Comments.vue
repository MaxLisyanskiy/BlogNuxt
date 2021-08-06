<template>
    <section v-if="comments" class="comments">
        <div class="container">
            <h3 class="title">Comments:</h3>
            <div class="comments__item" v-for="(comment, index) in comments" :key="index">
                <p class="comments__name">{{comment.name}}</p>
                <p class="comments__text">{{comment.text}}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        comments: {
            type: Object,
            requiered: true
        }
    }
}
</script>

<style lang="scss">
    .comments{
        max-width: 900px;
        margin: 0 auto;

        &__item {
            margin-bottom: 20px;
            background: white;
            padding: 30px;
            border-radius: 8px;
        }

        &__name {
            font-size: 24px;
            color: black;
        }

        &__text{
            color: grey;
        }
    }
</style>