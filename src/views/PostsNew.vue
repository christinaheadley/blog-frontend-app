<template>
  <div class="posts-new">
    <p v-if="!$parent.loggedIn()">Please log in.</p>
    <form v-on:submit.prevent="createPost()">
      <h1>New Post</h1>
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
        <small v-if="body.length > 255">Text cannot exceed 255 characters.</small>
        <!-- <small v-bind="255 - body.length">characters remaining</small> -->
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

export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      posts: [],
      errors: [],
      title: "",
      body: "",
      image: "",
      status: "",
    };
  },
  methods: {
    createPost: function() {
      var params = {
        title: this.title,
        body: this.body,
        image: this.image,
        user_id: this.user_id,
      };
      axios
        .post("/api/posts", params)
        .then(response => {
          console.log(response.data);
          this.$router.push("/posts");
        })
        .catch(error => {
          // console.log(error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
