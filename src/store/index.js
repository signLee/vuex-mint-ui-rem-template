/**
 * Created by sign on 2018/4/24.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex);
export default new Vuex.Store({
  actions,//挂载方法
  getters,
  state,
  mutations
});
