//路由配置页
import Vue from 'vue'
import Router from 'vue-router'

//组件懒加载
const Home =()=>import("@/components/home/home.vue");
const Test =()=>import("components/test/test.vue");

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

//配置路由导出
export default new Router({
  routes: routes
});

