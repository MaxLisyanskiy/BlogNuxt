<template>
    <div class="message" :class="messageClass">
        <p>{{message}}</p>
    </div>
</template>

<script>
export default {
    props: {
        messageClass: {
            type: String,
            default: 'success'
        },
        message: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
    .message {
        font-size: 22px;
        &.success {
            color: yellow;         
        }
        &.error {
            color: #fc5c65;
        }
    }
</style>