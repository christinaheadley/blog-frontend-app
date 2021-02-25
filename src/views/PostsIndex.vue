<template>
  <div class="posts-index">
    <!-- <h1>All Posts</h1>
      Search:
      <input type="text" v-model="filter" list="titles" /> -->
    <datalist id="titles">
      <option v-for="post in posts" v-bind:key="post.id">{{ post.title }}</option>
    </datalist>
    <!-- <button v-on:click="sortAttribute = 'title'">Sort by title</button>
    <div 
      <h2>Title: {{ post.title }}</h2>
      <router-link :to="`/posts/${post.id}`">
        <img v-bind:src="post.image" alt="" />
      </router-link>
      <p>Body: {{ post.body }}</p>
      <p>Image: {{ post.image }}</p>
      <p>User_id: {{ post.user_id }}</p>
      <p>Created {{ relativeDate(post.created_at) }}</p>
    </div> -->
    <div class="row">
      <div class="col-sm-6" v-for="post in orderBy(filterBy(posts, filter), sortAttribute)" v-bind:key="post.id">
        <div class="card" style="width: auto mr-3; height: 30rem;">
          <img v-bind:src="post.image" alt="" />
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.body }}</p>
            <router-link class="btn btn-primary" :to="`/posts/${post.id}`">
              <!-- {{ post.title }} -->
              More Info
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import moment from "moment";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      posts: [],
      filter: "",
      sortAttribute: "title",
    };
  },
  created: function() {
    axios.get("/api/posts").then(response => {
      console.log(response.data);
      this.posts = response.data;
    });
  },
  methods: {
    relativeDate: function(date) {
      return moment(date).fromNow();
    },
  },
};
</script>
