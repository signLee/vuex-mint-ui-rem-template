// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import RouterConfig from './router/index.js'
import 'mint-ui/lib/style.css'
import MintUi from 'mint-ui';
import store from './store'
import 'lib-flexible'


Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(MintUi);
const router=new VueRouter(RouterConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
