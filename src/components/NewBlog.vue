<template>
   <div class="addBlog">
       <h2>Add New Blog!</h2>
       <div class="block">
           <div class="inputs">
               <label for="">Name of Blog!</label>
                <input type="text" v-model="name">
                <label for="">Text in Blog!</label>
                <input type="text" v-model="description">
                <label for="">Author!</label>
                <input type="text" v-model="author">
            </div>
           <button @click="addPost">Add Blog!</button>
       </div>
   </div>
</template>

<script>
export default {
    name: 'newBlog',
    props: ['posts', 'addBlog'],
    data() {
        return {
            name: "",
            description: "",
            author: ""
        }
    },
    methods: {
        addPost() {
            let blog = {name: this.name, description: this.description, author: this.author, date: new Date()}
            this.addBlog(blog)
            console.log(blog)
            this.name = ""
            this.description = ""
            this.author = ""
            console.log(this.posts.Target)
        }
    }
}
</script>

<style>
    .inputs {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    input {
        width: 300px;
        margin-top: 5px;
        outline: none;
        padding: 6px 10px;
    }

    label {
        margin-top: 5px;
        text-align: left;
    }

    .block {
        max-width: 325px;
        margin: 0 auto;
    }
</style>