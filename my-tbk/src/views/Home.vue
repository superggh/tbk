<template>
  <div class="home">
    <div class="home-top">
          <van-search placeholder="请输入搜索关键词" shape="round" v-model="searchValue"  show-action >
         <div slot="action" @click="onSearch">搜索</div>
       </van-search>
    </div>


   <div class="home-body">
      <div class="tabs" @click="goList()"> 
        <van-tabs v-model="active" sticky >
        <van-tab  v-for="(item,i) in homeData.top" :key="i" :title="item.name" ></van-tab>

      </van-tabs>
      </div>
      <div class = "swipe-box">
  		<van-swipe :autoplay="3000">
  		  <van-swipe-item v-for="(image, index) in homeData.banner" :key="index" @click="gourl(image.path)">
  		    <img v-lazy="image.imgUrl" />
  		  </van-swipe-item>
  		</van-swipe>
      </div>



      <div class="list_row" >
        <div class="list_item"   v-for="(item,index) in homeData.nav" :key="index" @click="go(item)">
           <img :src="item.imgUrl" width="40" height="40" >
                {{item.name}}
        </div>   
      </div>

      <div class="banner1" @click="go9()">
        <img :src="homeData.banner1" >
      </div>

      <van-notice-bar @click="gotest()"
        :text=homeData.noticeText
        left-icon="volume-o"
      />

      <div class="hot" >   
        <van-cell  style="font-size:14px;font-weight: 600" title="大家都在领"   value="内容"  >
          <template slot="icon" >
            <van-tag style="margin-right:10px" round size="medium" type="danger"></van-tag>
          
          </template> 
          <template slot="default">
            <van-tag type="danger">{{homeData.totalTake}}</van-tag>
            <span style="font-size:12px" >次实时领券</span>
          </template>
        </van-cell>
          <div class="swipelist-box" >
           <Swipelist :msg="homeData.swipeList" />
         </div>

      </div>

      <div class="top-goods">
        <van-cell  style="font-size:14px;font-weight: 600" title="哒哒推荐"   value="内容"  >
          <template slot="icon" >
            <van-tag style="margin-right:10px" round size="medium" type="danger"></van-tag>
          
          </template> 
          <template slot="default">
           <span style="font-size:12px" >今日已为用户省</span>
            <van-tag type="danger">{{homeData.totalFree}}元</van-tag>
         
          </template>
        </van-cell>

      </div>

      <div class="goods-list">
        <van-card v-for="(item, i) in homeData.recomentList" :key="i"
          num="2"
          @click="goGoods(item)"
          :tag="item.couponName"
          :price="item.qprice"
          desc="描述信息"  
          :title="item.title"
          :thumb="item.imgUrl"
          :origin-price="item.price1"
        >
           <div slot="thumb">
            <img style="width:150px;height: 150px" :src="item.imgUrl">
      
          </div>
    <!--       <div slot="footer">
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
          </div> -->
        </van-card>
       </div>
    </div>

    <HelloWorld msg="W111"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Swipelist from "@/components/Swipelist.vue";
import { Search, Swipe, SwipeItem, Lazyload ,NoticeBar,Toast } from 'vant';
import { gethomeinfo } from '../api/api'
export default {
  name: "home",
  data() {
    return {
      homeData:{
       
      },
      bannerImg1:'https://img.alicdn.com/imgextra/i2/2053469401/O1CN018T7S7S2JJhx0tTGNe_!!2053469401.gif',
      tabList:[
        '精选','女装','男装','美食','美妆','居家','数码','鞋品','箱包','本地生活'
      ],
      active:0,
      noticeText:'哒哒优惠特惠进行中。。。' + "\n" +'dfsfsd',
    	searchValue:'',
      images: [
        'https://img.alicdn.com/imgextra/i4/2053469401/O1CN01Xi0Qx12JJhx3atWN1_!!2053469401.jpg',
        'https://img.alicdn.com/imgextra/i2/2053469401/O1CN01FJsRuM2JJhx8ruYjn_!!2053469401.png',
        'https://img.alicdn.com/imgextra/i4/2053469401/O1CN01WNiloK2JJhx8SLFTS_!!2053469401.jpg'
      ],
      goodsList:[{
        id:0,
        title:'【南极人】ins水洗棉空调被夏凉被大尺寸',
        price1:'18.99',
        qprice:'5.00',
        sales:'999',
        imgUrl:'https://img.alicdn.com/imgextra/i1/2200754576118/O1CN01CzpQjo1v45eEm7y1S_!!0-item_pic.jpg_310x310.jpg_.webp'
      },{
        id:0,
        title:'【南极人】ins水洗棉空调被夏凉被大尺寸',
        price1:'18.99',
        qprice:'5.00',
        sales:'999',
        imgUrl:'https://img.alicdn.com/imgextra/i1/2200754576118/O1CN01CzpQjo1v45eEm7y1S_!!0-item_pic.jpg_310x310.jpg_.webp'
      },{
        id:0,
        title:'【南极人】ins水洗棉空调被夏凉被大尺寸',
        price1:'18.99',
        qprice:'5.00',
        sales:'999',
        imgUrl:'https://img.alicdn.com/imgextra/i1/2200754576118/O1CN01CzpQjo1v45eEm7y1S_!!0-item_pic.jpg_310x310.jpg_.webp'
      },{
        id:0,
        title:'【南极人】ins水洗棉空调被夏凉被大尺寸',
        price1:'18.99',
        qprice:'5.00',
        sales:'999',
        imgUrl:'https://img.alicdn.com/imgextra/i1/2200754576118/O1CN01CzpQjo1v45eEm7y1S_!!0-item_pic.jpg_310x310.jpg_.webp'
      }],
      lists:[{
                id:0,
                name:'9.9包邮',
                img_src:'https://img.alicdn.com/imgextra/i3/2053469401/TB22BQvoYZnBKNjSZFrXXaRLFXa-2053469401.png',
                url:'/goods/1'
            },{
                id:1,
                name:'疯抢排行',
                img_src:'https://img.alicdn.com/imgextra/i1/2053469401/TB2G1wjoBnTBKNjSZPfXXbf1XXa-2053469401.png',
                url:'/'
            },{
                id:2,
                name:'限时特卖',
                img_src:'https://img.alicdn.com/imgextra/i2/2053469401/TB2Z1Qso7UmBKNjSZFOXXab2XXa-2053469401.png',
                url:'/'
            },{
                id:3,
                name:'幸运转盘',
                img_src:'https://img.alicdn.com/imgextra/i4/2053469401/TB2DEqooHZnBKNjSZFKXXcGOVXa-2053469401.png',
                url:'/'
            },{
                id:4,
                name:'6',
                img_src:'https://img.alicdn.com/imgextra/i4/2053469401/TB2DEqooHZnBKNjSZFKXXcGOVXa-2053469401.png',
                url:'/'
            }],
      hotList:[{
        id:0,
        title:'1800g20片手抓饼早餐家庭装',
        imgUrl:'https://img.alicdn.com/imgextra/i4/2453813882/TB2lsR9XQ9WBuNjSspeXXaz5VXa_!!2453813882.jpg_310x310.jpg_.webp',
        url:'',
        price:'19.19',
        oprice:'29.19',
        text:'4.5万人已领，10元券',

      },{
        id:1,
        title:'1800g20片手抓饼早餐家庭装',
        imgUrl:'https://img.alicdn.com/imgextra/i3/2731653262/O1CN01n9sGGp1Zy2T4DyTk4_!!2731653262.jpg_310x310.jpg_.webp',
        url:'',
        price:'19.19',
        oprice:'29.19',
        text:'4.5万人已领，10元券',
      },{
        id:2,
        title:'1800g20片手抓饼早餐家庭装',
        imgUrl:'https://img.alicdn.com/imgextra/i3/2731653262/O1CN01n9sGGp1Zy2T4DyTk4_!!2731653262.jpg_310x310.jpg_.webp',
        url:'',
        price:'19.19',
        oprice:'29.19',
        text:'4.5万人已领，10元券',
      },{
        id:3,
        title:'1800g20片手抓饼早餐家庭装',
        imgUrl:'https://img.alicdn.com/imgextra/i3/2731653262/O1CN01n9sGGp1Zy2T4DyTk4_!!2731653262.jpg_310x310.jpg_.webp',
        url:'',
        price:'19.19',
        oprice:'29.19',
        text:'4.5万人已领，10元券',
      },{
        id:4,
        title:'1800g20片手抓饼早餐家庭装',
        imgUrl:'https://img.alicdn.com/imgextra/i3/2731653262/O1CN01n9sGGp1Zy2T4DyTk4_!!2731653262.jpg_310x310.jpg_.webp',
        url:'',
        price:'19.19',
        oprice:'29.19',
        text:'4.5万人已领，10元券',
      }]
    }
  },
  created(){
    this._gethomeinfo()
  },
  methods: {
    go9(){
       this.$router.push({
        path: '/lists/0',
        query:{
          type: 1
        }
       })
    },
    gourl(url){
       this.$router.push({
        path: url
       })    
    },
    goList(){
      this.$router.push({
        path: '/lists/'+this.active,
      })    
    },
    goGoods(item){
      this.$router.push({
        path: '/goods/'+item.id,
        query:{
          goods_id:item.goods_id
        }
      })    
    },
    onSearch(){
     
       this.$router.push({
        path: '/searchlist/',
        query:{
          keywords:this.searchValue
        }
      })           
       
    },
    _gethomeinfo() {
      let obj = {}
      obj.uid = localStorage['_shop_userId']
      obj.token = localStorage['_shop_token']
      Toast.loading({
        mask: true
      })
      gethomeinfo(obj).then((res)=>{
        if (res.status == 200) {
          this.homeData = res.data
          localStorage['tbk_top'] = JSON.stringify(res.data.top)
     
          Toast.clear()
        } else {
          Toast.fail(res.msg)
            if (res.msg.indexOf("请重新登录") >= 0) {
              localStorage.clear()
              Toast.loading({
                duration: 2000,
                mask: true,
                message: res.msg
              });
             this.$router.replace({
                path: '/'
              })
            }
        }
      })
    },
    gotest(){
      this.$router.push({
        path: '/test'
      })
    },
    go(item) {
      if (item.type == 1) localStorage['bottom-tab'] = 1
      this.$router.push({
        path: item.path,
        query: {
          type:item.type
        }
      })
    }
  },
  mounted () {
    this.$parent.footshow = true
  },
  components: {
    HelloWorld,Swipelist
  },
};
</script>
<style scoped lang="stylus" >
  .swipe-box
    width:100%
    height:180px
    overflow: hidden
    img
      width:100%  
  .list_row
    display: flex
    align-items: center
    width:100%
    flex-wrap: wrap
    .list_item
      font-size: 12px;
      display: flex
      justify-content: center
      align-items: center
      flex-direction: column
      width:20%
      padding-top: 10px
      padding-bottom: 10px
      img    
        margin-bottom: 3px
        border-radius:50%
        display: block
    .opacity
      opacity: 0.4
      background: #e5e5e5
  .hot
    .swipelist-box
      overflow:hidden
    .hot-main  
      display:flex
      padding-left:20px;
      overflow-x: scroll;
      overflow-y: hidden;
      .hot-main-wrap
        margin-right: 5px;
        display: block;
        flex-shrink: 0;
        width: 40%;
        .hot-main-title
          margin-top:5px
        .hot-main-img
          border-radius:4px
          width:100%
        .hot-main-body
          position: relative
          top:-30px
          .hot-value-title
            padding-top:5px
            .hot-main-value
              
              color:red
            .hot-main-ovalue
              font-size:12px
              text-decoration: line-through
  .goods-list
    margin-top:10px
    .van-card
      height:150px
      padding:10px
    .van-card__content
      padding-top: 5%;
      padding-left: 20%;
      font-size:16px
      .van-card__desc
        padding:10px 0 
  .banner1
    img
      width:100%

</style>
