<template>
    <NewPostForm 
        :postEdit="post"
        @submit="onSubmit" 
    />
</template>

<script>
import NewPostForm from '@/components/admin/NewPostForm'

export default {
    components: { NewPostForm },
    layout: 'admin',
    data() {
        return {
            post: {
                id: 1,
                title: '1 post',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                img: 'https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg',
                content: 'Lorem ipsum dolor sit amet'
            }
        }
    },
    methods: {
        onSubmit(post) {
            console.log('Post Editing!')
            console.log(post)
        }
    }
}
</script>