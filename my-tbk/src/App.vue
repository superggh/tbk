<template>
  <div id="app">
   <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view> 
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" :key="$route.fullPath"></router-view>
    <foot v-if="footshow" ></foot>
  </div>
</template>

<script>
import Foot from "./components/Foot.vue"
export default {
  name: 'App',
  data () {
    return {
      // footindex:-1,
      footshow: false
    }
  },
  components: {
    Foot
  },
  // watch:{
  //   $route(e) {
  //     if (e.fullPath =='/lists/0') {
  //       this.footindex = 1
  //     } else {
  //        this.footindex = -1
  //     }
  //   }
  // }
}

</script>

<style lang="stylus">
* 
  box-sizing: border-box;
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
</style>
