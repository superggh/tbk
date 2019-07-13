<template>
  <div class="foot">
 
    <ul>
      <li v-for="item,index in tabs" :key="index" @click="check(index,item)">
     
        <span><img :src="active==index?item.img_y:item.img_n"/></span>
        <label :style="active==index?'color:#fd575c':''">{{item.name}}</label>
      </li>
    </ul>
  </div>
</template>

<script>
import { Icon} from 'vant'
export default {
  props:['msg'],
  data() {
    return {
      active: 0,
      tabs:[{
        img_n:require('../assets/images/foot/home_n.png'),
        img_y:require('../assets/images/foot/home_y.png'),
        name: this.$i18n.t("message.home"),
        link: '/',
        type: 0
      },
      {
        img_n:require('../assets/images/foot/h2_n.png'),
        img_y:require('../assets/images/foot/h2_y.png'),
        name: this.$i18n.t("message.free2"),
        link: '/lists/0',
        type: 1
      },
      {
        img_n:require('../assets/images/foot/h3_n.png'),
        img_y:require('../assets/images/foot/h3_y.png'),
        name: this.$i18n.t("message.browser"),
        link: '/',
        type: 0
      },
      {
        img_n:require('../assets/images/foot/h4_n.png'),
        img_y:require('../assets/images/foot/h4_y.png'),
        name: this.$i18n.t("message.my"),
        link: '/',
        type: 0
      },
      {
        img_n:require('../assets/images/foot/h5_n.png'),
        img_y:require('../assets/images/foot/h5_y.png'),
        name: this.$i18n.t("message.my"),
        link: '/my',
        type: 0
      }]
    }
  },
  created() {
    if (localStorage['bottom-tab']) {
      this.active = localStorage['bottom-tab']
    }
  },
  methods: {
    check(index,item) {

      this.active = index
      localStorage['bottom-tab'] = this.active

      this.$router.push({
        path: item.link,
        query:{
          type:item.type
        }
      })
    }
  },
  watch:{
    // msg(a) {
    //   if (a != -1) {
    //         this.active = a  
    //   }

    // }
  },
  components: {}
};
</script>
<style scoped lang="stylus" >
.foot
  background:#fff
  padding:5px 0
  position: fixed
  bottom: 0
  z-index: 99
  width: 100%
  ul
    display:flex
    justify-content: space-around
    li
      display:flex
      align-items: center
      flex-direction: column
      color:rgb(51,51,51)
      img
        width:6vw
      label
        font-size:10px
</style>