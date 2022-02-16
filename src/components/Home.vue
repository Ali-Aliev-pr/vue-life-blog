<template>
    <div>
        <p>Hello World</p>    
        <button @click="log">Press</button>
        <div class="blogs" v-for="blog in posts" :key="blog">
            <div class="blog">
                {{blog.name}}
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    name: 'Home',
    props: ['posts'],
    methods: {
        log() {
            console.log(this.posts)
        }
    }
}
</script>

<style>

</style>