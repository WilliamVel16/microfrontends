<template>
  <div class="AppUsers">
    <h1>API Posts</h1>
    <ul class="containerUsers">
      <b-card
        v-for="post in posts"
        :key="post.id"
        class="postCard"
      >
        <b-card-title class="postTitle">{{ post.title }}</b-card-title>
        <div class="postBody">
          <b-card-text>{{ post.body }}</b-card-text>
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

<style scoped>
.AppUsers {
  text-align: center;
  margin-top: 20px;
}

.containerUsers {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
}

.postCard {
  min-width: 275px;
  max-width: 300px;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  padding: 16px;
  margin-bottom: 20px;
}

.postTitle {
  margin: 0;
  font-family: Roboto;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.334;
  letter-spacing: 0em;
}

.postBody {
  margin: 0;
  font-family: Roboto;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 12px;
}
</style>

