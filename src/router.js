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
    path: "/view/:id",
    alias: "/view",
    name: "View Date",
    component: () => import("./components/ViewDate")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;