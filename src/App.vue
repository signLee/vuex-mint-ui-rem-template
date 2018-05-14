<template>
  <div id="app">
    <mt-cell title="标题文字" value="说明文字">mint-ui测试</mt-cell>
    <template>
      <div id="app">
        <input type="button" value="增加5" @click="add(5)">
        <input type="button" value="减少2" @click="reduce(2)">
        <span>现在的数字为{{count}}</span>
      </div>
    </template>
    <router-view></router-view>
    <div class="test">rem测试（直接按图纸上量出来的写PX就好了）</div>
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
        'increment':'INCREMENT',
         'decrement':'DECREMENT',
      }),//提交function到action.js
      add(val){
        this.increment(val);//这里可以直接调用从mapMutations里引入的方法
      },
      reduce(val){
        this.decrement(val)
      }
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
