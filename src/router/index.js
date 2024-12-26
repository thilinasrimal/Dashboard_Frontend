import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GoodWe from "@/views/GoodWe.vue";
import Deye from "@/views/Deye.vue";
import SMA from "@/views/SMA.vue";

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
  },
  {
    path: '/sma',
    name: 'sma',
    component: SMA
  }

]

const router = new VueRouter({
  mode: "history",
  routes

})

export default router
