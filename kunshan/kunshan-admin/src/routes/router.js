import Vue from "vue";
import Router from "vue-router";
import Index from "../views/index.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Index,
      redirect: "/dashboard",
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          label: "仪表盘",
          component: () => import("@/views/dashboard/index.vue")
        }
      ]
    },
    {
      path: "/about",
      name: "about",

      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
    }
  ]
});
