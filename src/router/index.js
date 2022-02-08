import { createRouter, createWebHashHistory } from "vue-router";
import Blogs from "../views/Blogs/Blogs.vue";

const routes = [
  {
    path: "/",
    name: "Blogs",
    component: Blogs,
  },
  {
    path: "/blog/:number",
    name: "Blog",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
   import(/* webpackChunkName: "about" */ "../views/Blogs/Blog.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
