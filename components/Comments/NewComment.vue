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
import AppButton from '@/components/UI/Controls/Button'
import AppInput from '@/components/UI/Controls/Input'
import AppTextArea from '@/components/UI/Controls/TextArea'
import Message from '@/components/UI/Message'

export default {
    components: {
        AppButton,
        AppInput,
        AppTextArea,
        Message
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
            this.message = 'Submited!'

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
</style>