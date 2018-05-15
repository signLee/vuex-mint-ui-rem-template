<template>
    <div class="">
      <p>homePage</p>
      <mt-cell title="标题文字" value="说明文字">mint-ui测试</mt-cell>
      <input type="button" value="增加5" @click="add(5)">
      <input type="button" value="减少2" @click="reduce(2)">
      <span>现在的数字为{{count}}</span>
      <div class="test">rem测试（直接按图纸上量出来的写PX就好了）</div>
      <div class="fl">共用样式重置测试</div>
      <router-link to="home">去主页</router-link>
    </div>
</template>

<script type="text/ecmascript-6">
  import { Cell   } from 'mint-ui';
  import { format } from 'assets/js/utils';
  import {mapGetters, mapActions,mapMutations} from 'vuex'
  export default {
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
    components: {Cell},
    mounted(){
      console.log(format(new Date()))
    }
  }
</script>

<style >
  .test{
    width:200px;
    height:200px;
  }

</style>
