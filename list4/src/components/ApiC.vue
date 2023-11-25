<template>
  <div class="App-posts">
    <h1>API Posts</h1>
    <ul class="card-posts">
      <b-card 
        v-for="post in posts"
        :key="post.id"
        class="li-card-posts"

      >
        <b-card-title
          style="
          color: #706703;
            margin: 0;
            font-family: Arial, sans-serif;
            font-weight: bold;
            font-size: large;
            line-height: 1.334;
            letter-spacing: 0em;
          "
          >{{ post.title }}</b-card-title
        >
        <div>
          <b-card-text
            style="
              margin: 0;
              font-family: Arial, sans-serif;
              font-weight: 400;
              font-size: small;
              line-height: 1.5;
              letter-spacing: 0.00938em;
              color: #706703;
              margin-bottom: 12px;
            "
            >{{ post.body }}</b-card-text
          >
        </div>
      </b-card>
    </ul>
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
      .then((json) => {
        this.posts = json;
        console.log(json);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
