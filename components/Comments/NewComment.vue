<template>
    <section class="new-comment">
        <div class="container">
            <h2 class="title">New comment:</h2>

            <Message v-if="message" :message="message"/>

            <form @submit.prevent="onSubmit" class="new-comment__form">

                <AppInput v-model="comment.name">Name:</AppInput>
                <AppTextArea v-model="comment.text">Text:</AppTextArea>

                <AppButton>Submit!</AppButton>

            </form>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        postId: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            message: null,
            comment: {
                name: '',
                text: ''
            }
        }
    },
    methods: {
        onSubmit () {
            this.$store.dispatch('addComment', {
                postId: this.postId,
                publish: false,
                ...this.comment
            })
                .then( () => {
                    this.message = 'Submited!'
                    this.comment.name = ''
                    this.comment.text = ''
                })
                .catch(e => console.log(e))
        }
    }
}
</script>

<style lang="scss">
    .new-comment {
        text-align: center;
        background-color: #676966;
        &__form {
            max-width: 600px;
            margin: 30px auto;
        }
    }
</style>