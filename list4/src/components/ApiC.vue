<template>
  <div class="AppUsers">
    <h1>hola</h1>
    <div class="containerUsers">
      
    </div>
  </div>
</template>

<script>
export default {
  name: "ApiC",
  data() {
    return {
      posts: [],
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => this.posts = json);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
