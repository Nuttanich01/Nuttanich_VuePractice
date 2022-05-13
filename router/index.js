// index.js
import Vue from "vue";
import Router from "vue-router";
import home from "../components/home";
import vmodel from "../components/vmodel";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: home
    },
    {
      path: "/vmodel",
      component: vmodel
    }
  ]
});
