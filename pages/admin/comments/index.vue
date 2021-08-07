<template>
    <CommentsTable :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']">
        <tbody slot="tbody"> 
            <tr v-for="(comment, index) in comments" :key="index">
                <td><span>{{ comment.name }}</span></td>
                <td><span>{{ comment.text }}</span></td>
                <td>
                    <span v-if="comment.status" class="status true">Publish</span>
                    <span v-else class="status false">Hidden</span>
                </td>
                <td><span @click="changeStatus(comment.id)" class="link"> Change status </span></td>
                <td><span @click="deleteComment(comment.id)" class="link"> Delete </span></td>
            </tr>
        </tbody>
    </CommentsTable >
</template>

<script>
import CommentsTable from '@/components/admin/CommentsTable'

export default {
    components: { CommentsTable },
    layout: 'admin',
    data() {
        return {
            comments: [
                { id: 1, name: 'Alex', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', status: true},
                { id: 2, name: 'Max', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', status: false},
            ]
        }
    },
    methods: {
        changeStatus(id) {
            console.log(`Changed comment id - ${id}`)
        },
        deleteComment(id) {
            console.log(`Deleted comment id - ${id}`)
        }
    }
}
</script>