<template>
  <section class="section-posts">
    <!-- @wvelorg/list4 is mounted! API 4 -->
    <ApiC />
  </section>
</template>

<script>
import ApiC from "./components/ApiC.vue";
import "./components/app.css"

export default {
  name: "App",
  components: {
    ApiC,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
