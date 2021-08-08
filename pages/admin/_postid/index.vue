<template>
    <NewPostForm 
        :postEdit="post"
        @submit="onSubmit" 
    />
</template>

<script>
import axios from 'axios'

import NewPostForm from '@/components/admin/NewPostForm'

export default {
    components: { NewPostForm },
    layout: 'admin',
    asyncData (context) {
        return axios.get(`https://blog-nuxt-67ba8-default-rtdb.europe-west1.firebasedatabase.app/posts/${context.params.postid}.json`)
        .then(res => {
            return {
            post: { ...res.data, id: context.params.postid }
            }
        })
        .catch(e => context.error(e))
    },
    methods: {
        onSubmit(post) {
            console.log('Post Editing!')
            this.$store.dispatch('editPost', post)
                .then(()=>{
                    this.$router.push('/admin')
                })
        }
    }
}
</script>