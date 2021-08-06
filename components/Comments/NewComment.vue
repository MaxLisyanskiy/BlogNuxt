<template>
    <section class="new-comment">
        <div class="container">
            <h2 class="title">New comment:</h2>
            <form @submit.prevent="onSubmit" class="new-comment__form">
                <label>Name:</label>
                <input v-model="comment.name" type="text">
                <label>Text:</label>
                <textarea v-model="comment.text"></textarea>

                <!-- buttons -->
                <div class="controls">
                    <AppButton>Submit!</AppButton>
                </div>

            </form>
        </div>
    </section>
</template>

<script>
import AppButton from '@/components/UI/Controls/Button'

export default {
    components: {AppButton},
    data() {
        return {
            comment: {
                name: '',
                text: ''
            }
        }
    },
    methods: {
        onSubmit () {
            console.log(this.comment)
        }
    }
}
</script>

<style lang="scss">
    .new-comment {
        text-align: center;
        background-color: #afffa4;
        &__form {
            max-width: 600px;
            margin: 30px auto;
        }
    }
    .controls{
        margin: 30px 0;
    }
</style>