<template>
    <div>
        <h1>Post: </h1>
        <input type="text" v-model="pushId">
        <button @click="getPost">Get post</button>
    </div>

</template>

<script>
export default {
    data() {
        return {
            pushId: ''
        }
    },
    methods: {
        getPost() {
            this.$router.push(`/posts/${this.pushId}`)
        }
    }
}
</script>