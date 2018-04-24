<template>
  <div id="app">
    <mt-cell title="标题文字" value="说明文字">mint-ui测试</mt-cell>
    <template>
      <div id="app">
        <input type="button" value="增加" @click="increment">
        <span>现在的数字为{{count}}</span>
      </div>
    </template>
    <router-view></router-view>
    <div class="test">rem测试</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Cell   } from 'mint-ui';
  import {mapGetters, mapActions,mapMutations} from 'vuex'
  export default {
    name: 'App',
    data: function () {
      return {
        popupVisible: true
      }
    },
    computed: mapGetters([
      'count'
    ]),//从getter.js获取数据属性
    methods: {
      ...mapMutations({
        'increment':'INCREMENT'
      }),//提交function到action.js
      test(){
        this.increment();//这里可以直接调用从mapMutations里引入的方法
      }//当前页的其他方法
    },
    components: {Cell}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .test{
    width:200px;
    height:20px;
  }
</style>
