<template>
    <section class="contact">
        <div class="container">
            <h2 class="title">Contact me!</h2>

            <Message v-if="message" :message="message"/>

            <form @submit.prevent="onSubmit" class="contact-form">

                <AppInput v-model="user.name">Name:</AppInput>
                <AppInput v-model="user.email" type="email">Email:</AppInput>
                <AppTextArea v-model="user.text">Text:</AppTextArea>

                <AppButton>Submit!</AppButton>
                
            </form>
        </div>
    </section>
</template>

<script>
export default {

    data() {
        return {
            message: null,
            user: {
                name: '',
                email: '',
                text: ''
            }
        }
    },
    methods: {
        onSubmit () {
            this.message = 'Submited!'
            console.log(this.user)
        }
    }
}
</script>

<style lang="scss">
    .contact {
        text-align: center;
        background-color: #9abdfd;
        
        &-form {
            max-width: 600px;
            margin: 30px auto;
        }
    }
</style>