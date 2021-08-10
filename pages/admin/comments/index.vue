<template>
    <no-ssr>
        <CommentsTable :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']">
            <tbody slot="tbody"> 
                <tr v-for="(comment, index) in comments" :key="index">
                    <td><span>{{ comment.name }}</span></td>
                    <td><span>{{ comment.text }}</span></td>
                    <td>
                        <span v-if="comment.publish" class="status true">Publish</span>
                        <span v-else class="status false">Hidden</span>
                    </td>
                    <td><span @click="changeStatus(comment)" class="link"> Change status </span></td>
                    <td><span @click="deleteComment(comment.id)" class="link"> Delete </span></td>
                </tr>
            </tbody>
        </CommentsTable >
    </no-ssr>
</template>

<script>
import axios from 'axios'

import CommentsTable from '@/components/admin/CommentsTable'

export default {
    components: { CommentsTable },
    layout: 'admin',
    data() {
        return {
            comments: []
        }
    },
    mounted() {
        this.loadComments()
    },
    methods: {
        loadComments() {
            axios
                .get('https://blog-nuxt-67ba8-default-rtdb.europe-west1.firebasedatabase.app/comments.json')
                .then( res => {
                    let commentsArray = []
                    Object.keys(res.data).forEach(key => {
                        const comment = res.data[key]
                        commentsArray.push({...comment, id: key})
                    })
                    this.comments = commentsArray
                })
        },
        changeStatus(comment) {
            comment.publish = !comment.publish
            axios
                .put(`https://blog-nuxt-67ba8-default-rtdb.europe-west1.firebasedatabase.app/comments/${comment.id}.json`, comment)
        },
        deleteComment(id) {
            axios
                .delete(`https://blog-nuxt-67ba8-default-rtdb.europe-west1.firebasedatabase.app/comments/${id}.json`)
                .then( res => {
                    this.loadComments()
                })
        }
    }
}
</script>