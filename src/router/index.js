import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GoodWe from "@/views/GoodWe.vue";
import Deye from "@/views/Deye.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/goodwe',
    name: 'goodwe',
    component: GoodWe
  },
  {
    path: '/deye',
    name: 'deye',
    component: Deye
  }


]

const router = new VueRouter({
  mode: "history",
  routes

})

export default router
