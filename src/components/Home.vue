<template>
    <div>
        <p>Hello World</p>    
        <button @click="log">Press</button>
        <div class="blogs" v-for="blog in posts" :key="blog">
            <div class="blog">
                <p>{{blog.name}}</p>
                <router-link :to="{name: 'blog', params: {id: blog.name}}">{{blog.description}}</router-link>
                <p>Author: {{blog.author}}</p>
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
    .blogs {
        max-width: 500px;
        /* background-color: aqua; */
        margin: 0 auto;
        padding: 15px 0;
    }

    .blog {
        /* border: 1px solid #000; */
        text-align: left;
        padding: 5px 0 3px 5px;
    }
</style>