<template>
  <div class="searchbox">
     <div class="search-top">
       
    
            <span style="padding-top: 22px;padding-left: 13px;width: 20px;" @click="goback"> <van-icon name="arrow-left" /></span>
            <span style="width: 100%;"> <van-search @search="_search" placeholder="请输入搜索关键词" shape="round" v-model="keywords"  show-action >
            <div slot="action" @click="_search">搜索</div>
           </van-search></span>

       
    </div>

    <div class="search-filter" > 
       <van-dropdown-menu :overlay="false" >
          <van-dropdown-item v-model="indexValue" :options="option"  @change="onFilter(0)"/>
          <van-dropdown-item v-model="indexPrice" :options="option1" @change="onFilter(1)" />  
          <van-dropdown-item v-model="indexSales" :options="option2"   @change="onFilter(2)"></van-dropdown-item>
          <van-dropdown-item title="筛选" ref="item">
            <van-switch-cell v-model="switch1" title="包邮" />
            <van-switch-cell v-model="switch2" title="团购" />
            <van-button block type="info" @click="onConfirm">确认</van-button>
          </van-dropdown-item>

        </van-dropdown-menu>
    </div>
      <div class = "search-content">
       <Goodslistbig  class="goodslistbig" v-for="(item,i) in goodsList" :key="i" :msg="item"/>
     </div>
  </div>
</template>

<script>
import Goodslistbig from "@/components/Goodslistbig.vue"
import { search } from '../api/api'
import {Toast} from 'vant'
export default {
  data() {
      return {
        keywords: this.$route.query.keywords,
        goodsList:[
        ],
        value:0,
        indexValue: 0,
        indexSales: 5 ,
        indexPrice: 3,
        switch1: false,
        switch2: false,
        option1: [
          { text: '价格升序', value: 3 },
          { text: '价格降序', value: 4 },
        ], 
        option2: [
          { text: '销量升序', value: 5 },
          { text: '销量降序', value: 6 },
        ], 
        option: [
          { text: '综合排序', value: 0 },
          { text: '新款商品', value: 1 },
          { text: '活动商品', value: 2 }
        ]
      }
    },
  methods: { 
    goback(){
      this.$router.back(-1)
    },
    onFilter(id){
      switch (id) {
        case 0:
          // console.log('index',this.value)
          this.value = this.value
          break;
        case 2:
          // console.log('sales',this.indexSales)
          this.value = this.indexSales
          break;
        case 1:
          // console.log('price',this.indexPrice)
          this.value = this.indexPrice
          break;
      }

      this._search()
      
    },
    onConfirm(){

    },
    _search(){
      let obj = {}
      obj.keywords = this.keywords
      obj.page =1
      obj.index = this.value
      search(obj).then(res=>{
        if (res.status == 200) {
          this.goodsList = res.data
        } else {
          Toast.fail(res.msg)
        }
      })
    },

    _getlist(){
      
    }
  },
  created() {
    this._search()
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
  .searchbox
    .search-top
      display:flex
      font-size:12px
    .search-filter
      font-size:12px
    .search-content
      width:100%


</style>
