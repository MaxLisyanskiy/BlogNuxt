<template>
    <button
        class="btn btn-controls"
        :class="btnClass"
        v-on="$listeners"
        v-bind="$attrs"
    >
        <slot/>
    </button>
</template>

<script>
export default {
    props: {
        btnClass: {
            type: String,
            default: 'btnPrimary'
        }
    }
}
</script>

<style lang="scss">
    .btn-controls{
        margin: 30px 0;
    }
</style>