<template>
  <div class="Goodslist">
    <div class="tabs" > 
        <van-tabs v-model="active" sticky @click="goList()" >
        <van-tab  v-for="(item,i) in topData" :key="i" :title="item.name" ></van-tab>

        </van-tabs>
    </div>
      <div class = "content">
       <Goodslistbig  class="goodslistbig" v-for="(item,i) in goodsList" :key="i" :msg="item"/>
     </div>
  </div>
</template>

<script>
import Goodslistbig from "@/components/Goodslistbig.vue"
import { gettop,getlist } from '../api/api'
export default {
  data() {
      return {
        active:  0,
        type: 0,
        id:0,
        topData:[],
        goodsList:[
     
        ]
      }
    },
  methods: {
     goList(){
      console.log(this.active)
      this._getlist()
 
  
    },

 
    _getlist(){

      let obj = {}
      obj.page=1
      obj.id = this.topData[this.active].id      
      obj.type = this.type
      
      getlist(obj).then(res=>{
        if (res.status==200) {
      
           this.goodsList =res.data
     
        }
      })
    }
  },
  created() {
    this.topData =  JSON.parse(localStorage['tbk_top'])
    this.active = this.$route.params.id
    this.type =this.$route.query.type
    console.log(this.active)
    this._getlist()
  },
  mounted () {
    this.$parent.footshow = true
  },
  components: {
    Goodslistbig
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" >
  .Goodslist
    .content
      margin-top:15px 
      .goodslistbig
        margin: 5px
</style>
