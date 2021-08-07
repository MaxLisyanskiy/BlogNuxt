<template>
    <section class="auth">
        <div class="container">
            <form class="auth-form" @submit.prevent="onSubmit">
                <AppInput type="email" v-model="user.email">Login:</AppInput>
                <AppInput type="password" v-model="user.password">Password:</AppInput>
                <AppButton>Login</AppButton>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        onSubmit() {
            this.user.email = ""
            this.user.password = ""
        }
    }
}
</script>

<style lang="scss">
    .auth{
        margin: 0 auto;
        text-align: center;

        &-form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 90vh;
            & input {
                min-width: 460px;
            }
        }
    }
</style>