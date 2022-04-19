import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about/:id",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/about",
      name: "collectionview",
      component: () => import("../views/CollectionView.vue"),
    }
  ],
});

export default router;
