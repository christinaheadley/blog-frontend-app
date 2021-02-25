import Vue from "vue";
import VueRouter from "vue-router";
// import Vue2Filters from "vue2-filters";
// import bootstrap from "bootstrap";
import Home from "../views/Home.vue";
import References from "../views/References.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import PostsIndex from "../views/PostsIndex.vue";
import PostsNew from "../views/PostsNew.vue";
import PostsShow from "../views/PostsShow.vue";
import PostsEdit from "../views/PostsEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/references",
    name: "References",
    component: References,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/posts",
    name: "posts-index",
    component: PostsIndex,
  },
  {
    path: "/posts/new",
    name: "posts-new",
    component: PostsNew,
  },
  {
    path: "/posts/show",
    name: "posts-show",
    component: PostsShow,
  },
  {
    path: "/posts/edit",
    name: "posts-edit",
    component: PostsEdit,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
