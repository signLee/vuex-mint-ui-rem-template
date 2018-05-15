<template>
  <div id="app">
    <keep-alive>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    name: 'App',
    data: function () {
      return {
      }
    },

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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0 !important;
  }

</style>
