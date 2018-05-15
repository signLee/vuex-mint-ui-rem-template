import Vue from 'vue'
import Router from 'vue-router'
//const Home =()=>import("@/components/home/home.vue");
import Home from '@/components/home/home.vue'
const Test =()=>import("@/components/test/test.vue");

Vue.use(Router)

var routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  }
]

export default new Router({
  routes: routes
});

