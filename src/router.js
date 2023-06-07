import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/home",
    name: "Home",
    component: () => import("./components/Home")
  },
  {
    path: "/dashboard",
    alias: "/dashboard",
    name: "Dashboard",
    component: () => import("./components/Dashboard")
  },
  {
    path: "/view",
    alias: "/view",
    name: "View",
    component: () => import("./components/ViewDate")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;