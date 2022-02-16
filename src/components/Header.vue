<template>
    <header class="header">
        <div class="header__container">
            <div class="header__left">
                <h2>The life Blog</h2>
            </div>
            <div class="header__right">
                <router-link to="/">Home</router-link>
                <router-link to="/newBlog">New Blog</router-link>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style>
    .header {
        height: 50px;
        padding: 10px 0;
    }

    .header__container {
        max-width: 600px;
        border-bottom: 1px solid black;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        height: 100%;
        align-items: center;
    }

    .header__left {
        display: flex;
    }

    .header__right {
        display: flex;
    }

    a:not(:first-child) {
         margin-left: 10px;
    }
</style>