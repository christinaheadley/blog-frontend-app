<template>
  <div id="app">
    <!--  -->
    <!--  -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/posts">Home</router-link>
            <!-- <span class="sr-only">(current)</span> -->
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/posts/new">Add a Post</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" v-if="!loggedIn()" to="/signup">Signup</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" v-if="!loggedIn()" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" v-if="loggedIn()" to="/logout">Logout</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> -->
        </form>
      </div>
    </nav>
    <div class="container-fluid">
      <!-- Content here -->
      <router-view />
    </div>
    <div v-if="flashMessage">
      {{ flashMessage }}
      <button v-on:click="flashMessage = ''">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      flashMessage: "",
    };
  },
  methods: {
    loggedIn: function() {
      return localStorage.jwt ? true : false;
      // ? true : false is optional and changes options in navbar based on login status
    },
    getUserId: function() {
      return localStorage.user_id;
    },
  },
};
</script>
