<template>
  <div class="posts-show">
    <h1>{{ post.message }}}}</h1>
    <!-- title, body, image, user_id -->
    <router-link :to="`/posts/${post.id}`">
      <img v-bind:src="post.image" />
    </router-link>
    -->
    <p>{{ post.title }}</p>
    <p>{{ post.body }}</p>
    <p>{{ post.image }}</p>
    <p>{{ post.user_id }}</p>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      posts: [],
    };
  },
  created: function() {
    axios.get(`/api/posts/${this.$route.params.id}`).then(response => {
      console.log(this.post);
      this.post = response.data;
    });
  },
  methods: {},
};
</script>
