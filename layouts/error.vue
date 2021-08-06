<template>
    <section class="not-found">
        <div class="container">
            <div class="not-found__container">
                <p class="title">Page Bot Found!</p>
                <nuxt-link to="/" class="not-found__link">Back to main page?</nuxt-link>
            </div>     
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.not-found{
    &__container{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 90vh;
    }
    &__link{
        padding: 15px;
        background-color: lavender;
        border-radius: 10px;
    }
}

</style>