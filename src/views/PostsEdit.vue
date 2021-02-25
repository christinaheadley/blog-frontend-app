<template>
  <div class="posts-edit">
    <form v-on:submit.prevent="createPost()">
      <h1>Edit Post</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="title" />
      </div>
      <div class="form-group">
        <label>Body:</label>
        <input type="text" class="form-control" v-model="body" />
      </div>
      <div class="form-group">
        <label>Image:</label>
        <input type="text" class="form-control" v-model="image" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
// <!-- title, body, image, user_id -->
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      errors: [],
      title: "",
      body: "",
      image: "",
      user_id: "",
    };
  },
  created: function() {
    axios.get(`/api/posts/${this.$route.params.id}`).then(response => {
      console.log(this.post);
      this.post = response.data;
    });
  },
  methods: {
    updatePost: function() {
      var params = {
        title: this.title,
        body: this.body,
        image: this.image,
        user_id: this.user_id,
      };
      axios
        .patch(`/api/posts/${this.post.id}`, params)
        .then(response => {
          console.log(response.data);
          this.$router.push(`/posts/${this.post.id}`);
        })
        .catch(error => {
          // console.log(error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
