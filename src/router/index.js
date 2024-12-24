import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GoodWe from "@/views/GoodWe.vue";

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
  }

]

const router = new VueRouter({
  mode: "history",
  routes

})

export default router
