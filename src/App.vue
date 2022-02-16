<template>
  <div id="nav">
    <Header/>
    <div class="content">
      <router-view :posts="posts" :addBlog="addNote"></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      posts: [
        {name: 'Ali'},
        {name: 'Maxim'}
      ]
    }
  },
  methods: {
    addNote(val) {
      this.posts.push(val)
      console.log('added')
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
}

.content {
  max-width: 600px;
  /* background-color: lightblue; */
  margin: 50px auto;
  text-align: center;
}
</style>