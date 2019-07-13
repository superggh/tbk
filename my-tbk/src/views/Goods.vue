<template>
  <div class="goods">
        <div class="goods-head">
          <div class="goods-head-box">
            <span class="goods-head-left" @click="go('back')"> <van-icon name="arrow-left" /></span>

            <span class="goods-head-right" @click="popShow = true"><van-icon name='ellipsis'  /></span>          
          </div>
          <transition name="van-fade">
           <div class="goods-head-fixed" v-if="showTopFixed" >
            <div class = "goods-head-fixed-content">
             <span   @click="go('back')"> <van-icon name="arrow-left" /></span>
              <van-tabs v-model="active" @click = "goPos()">
                <van-tab title="商品"></van-tab>
                <van-tab title="评论"></van-tab>
                <van-tab title="详情"></van-tab>
              </van-tabs>
              <span  @click="popShow = true"><van-icon name='ellipsis'  /></span> 
           </div>
          </div>
        </transition>
       </div>

     <div class = "swipe-box">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in tbapiData.small_images.string" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
     </div>

    <div class="banner1">
      <van-row type="flex" align="center">
        <van-col span="8"><img style="width: 100px;" src="https://img.alicdn.com/imgextra/i1/2053469401/TB2PmMEwLiSBuNkSnhJXXbDcpXa-2053469401.png"></van-col>
        <van-col span="8" style=";font-size:12px" >限时限量 疯狂抢购中</van-col>
        <van-col span="8"><label style="color:red">距离结束</label><label style="font-size: 12px">{{showLeft}}</label></van-col>
      </van-row>
    </div>
 
    <div class="goods-title">
       <van-row type="flex" align="center">
        <van-col  span="4"> <van-tag round plain type="danger">省</van-tag></van-col>
        <van-col  span="22"> <span>{{goodsinfo.title}}</span></van-col>
       </van-row> 
    </div>

    <div class="goods-price">
       <van-row type="flex"   justify="space-between">
        <van-col  span="18"> <span>券后价</span><span class="span-price">¥{{(goodsinfo.price - saveMoney).toFixed(2)}}</span></van-col>
        <van-col  span="6"> <span>月销量</span><span>{{tbapiData.volume}}</span></van-col>
       </van-row>     
    </div>
    <div class="goods-other-price">
       <van-row type="flex"   justify="space-between">
        <van-col  span="16"> <span>天猫价:</span><span>¥{{goodsinfo.price}}</span><span style="padding-left:5px">原价：<del>{{tbapiData.reserve_price}}</del></span></van-col>
        <van-col  span="4"> <span><van-icon color="red" name="passed" />包邮</span></van-col>
        <van-col  span="4"> <span><van-icon color="red" name="passed" />运费险</span></van-col>
       </van-row>     
    </div>

    <div class="list-goods-quan">
      <div class="quan-box">
      <img src="https://cmsstatic.dataoke.com//wap_new/main/images/goods_quan.png?v=201906201943">
        <div class="goods-quan-text">
          <van-col  span="18" style="font-size: 14px"><p>{{saveMoney}}元优惠券</p><p>使用期限:{{goodsinfo.couponStart}}-{{goodsinfo.couponEnd}}</p></van-col>
          <van-col  span="6" style="padding-top: 28px;">   <span> 立即领券 </span>  </van-col>
        </div>
     </div>
    </div>

    <div class="goods-desc">福利！{{tbDetail.item.subtitle}}</div>

    <div class="goods-shop-box">
        <van-row type="flex"   justify="space-between"  align="center" style="text-align: center" > 
          <van-col  span="4"> <img style="width:80%" src="https://img.alicdn.com/imgextra/i1/2053469401/TB2PmMEwLiSBuNkSnhJXXbDcpXa-2053469401.png" ></van-col>
          <van-col span="12"> 
            <label>{{tbapiData.nick}}</label>
            <label >{{tbapiData.provcity}}</label>
          <!--   <label><img style="width:50%" src="https://img.alicdn.com/imgextra/i1/2053469401/TB2PmMEwLiSBuNkSnhJXXbDcpXa-2053469401.png" ></label> -->
          </van-col>
          <van-col  span="8"> <span>店铺所有优惠<van-icon name="arrow" /></span></van-col>
       </van-row>  
        <van-row type="flex" style="padding:5px 12px;width:100%;font-size:12px"  justify="space-between"  align="center"> 
          <van-col  span="8"> 宝贝描述:{{tbDetail.seller.evaluates[0].score}} <van-tag  size="medium" type="success" round>好</van-tag></van-col>
          <van-col  span="8">  宝贝描述:{{tbDetail.seller.evaluates[1].score}}<van-tag size="medium" type="success" round>好</van-tag></van-col>
          <van-col  span="8"> 宝贝描述:{{tbDetail.seller.evaluates[2].score}} <van-tag size="medium" type="success" round>好</van-tag></van-col>
       </van-row>  
    </div>



    <div class="goods-detail">

      <div  id="comment">
        <Comment />
    </div>

    <div class="similar">
      <p>相似推荐</p>
      <!--  <Swipelist msg="W111"/> -->
    </div>

      <p>宝贝详情</p>
      <div id="box2" style="display: flex;flex-direction: column;overflow: hidden;"  class="goods-content" >
        <van-image v-for="(item,index) in detailContent" :key="index"
          width="100%"
          height="100%"
          lazy-load
          :src="item"
        />
       </div>
    </div>
 
    <div class="goods-buy "  >
      <div class="goods-buy-box">
        <van-row type="flex"    align="center"  justify="space-between">
        <van-col span="4"><span><van-icon name="share" /></span>分享<span></span></van-col>
        <van-col span="4"><span><van-icon name="star-o" /></span>收藏<span></span></van-col>
        <van-col span="8" offset="2"><van-button plain type="danger">朴素按钮</van-button></van-col>
        <van-col span="8"><van-button type="danger">领券购买</van-button></van-col>

      </van-row>
      </div>
    </div>

   <div class="goods-list">
    <h2 style="  text-align: center;">为您推荐</h2>
     <div  class="goods-list--box" style=" padding: 4px; clear: both;" >
      <Goodslist  v-for="(item,i) in goodsList" :key="i" :msg="item"/>
  
     </div>
   </div>


   <transition name="fade">
      <div class="pop-more" v-show="popShow">
        <div @click="">
          <van-icon name="comment-o" />
          <span>消息</span>
        </div>
        <div @click="">
            <van-icon name="comment-o" />
          <span>搜索</span>
        </div>
        <div @click="">
            <van-icon name="comment-o" />
          <span>首页</span>
        </div>  
        <div @click="">
          <van-icon name="comment-o" />
          <span>个人中心</span>
        </div>   
      </div>
    </transition>
    <div class="pop-cover" v-show="popShow" @click="popShow = false"></div>

  </div>
</template>

<script>
import Swipelist from "@/components/Swipelist.vue";
import Goodslist from "@/components/Goodslist.vue";
import Comment   from "@/components/Comment.vue"
import { Toast } from 'vant';
import { getgoodsinfo,gettbapi ,gettbdetail,curlUrl} from '../api/api'
export default {
  data() {
      return {
        showTopFixed:false,
        active:0,
        tbDetail:{
          item:{
            subtitle:''
          },
          seller:{
            shopIcon:'',
            evaluates:[
            {
              score:5,
            },
            {
              score:5,
            },
            {
              score:5,
            }
            ]
          }
        },
        tbprice:0,
        sellCount:0,
        saveMoney:0,
        goodsinfo:[],
        h5moduleDescUrl:'',
        couponEnd:null,
        showLeft:'',
        goods_id:0,
        tbapiData:{
          small_images:{
            string:['']
          }
        },
        popShow:false,
        detailContent:
          [''],
        goodsDesc:'福利！【换季搬家必囤神器~】牛津布防潮收纳袋！可称重50斤的款哇~限时活动大小3个装，只要17.9！换季衣服，被子收拾起来！衣柜可整齐了！',
        id: 0,
        searchValue:'',
        images: [
          '',
        ],
    goodsList:[{
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
  mounted(){
    window.scroll(0,0)
    window.addEventListener('scroll', this.handleScroll)
  },
  created(){
 
    this.id = this.$route.params.id
    console.log(this.id)
    this._getgoodsinfo();
    this._gettbapi()
    // this._gettbdetail()
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop>120) this.showTopFixed = true
      if (scrollTop<120) this.showTopFixed = false    
    },
    goPos(){
      switch (this.active) {
        case 0:
          window.scrollTo(0,0)
          break;
        case 1:
 
          document.getElementById("comment").scrollIntoView();
          // this.$refs.comment.scrollBy(0,300);
          // document.documentElement.scrollTop=450
          break;
        case 2:
          document.getElementById("box2").scrollIntoView();
      } 
 
      
    },
    _gettbdetail(){
      let obj ={}
      obj.goods_id = this.$route.query.goods_id
      gettbdetail(obj).then((res)=>{
        if (res.status ==200) {
          //销量
          this.tbDetail = res.data.data
         this.sellCount = (JSON.parse(res.data.data.apiStack[0].value)).item.vagueSellCount
      
          obj.url = res.data.data.item.moduleDescUrl
          curlUrl(obj).then(res=>{
            if (res.status==200) {
              this.detailContent =[];
              let imgContent =res.data.data.children
              imgContent.forEach(item=>{
                if (item.params.picUrl !='') {
                  this.detailContent.push(item.params.picUrl)
                }
              })
             
            }
          
          })
          this.images = res.data.data.item.images
        } else {
          Toast.fail(res.msg)
        }
      })
    },
    _countdown () {
      let that = this
      // 目标日期时间戳
      const end = Date.parse(new Date(this.couponEnd))
      // 当前时间戳
      const now = Date.parse(new Date())
      // 相差的毫秒数
      const msec = end - now
      // 计算时分秒数
      let day = parseInt(msec / 1000 / 60 / 60 / 24)
      let hr = parseInt(msec / 1000 / 60 / 60 % 24)
      let min = parseInt(msec / 1000 / 60 % 60)
      let sec = parseInt(msec / 1000 % 60)
      // 个位数前补零
      if (sec <0 ) {
         this.showLeft ='已过期'
      } else {
         this.showLeft = `${day}天 ${hr}小时 ${min}分钟 ${sec}秒`
      }
      hr = hr > 9 ? hr : '0' + hr
      min = min > 9 ? min : '0' + min
      sec = sec > 9 ? sec : '0' + sec
  
    
    
     
      setTimeout(function () {
        that._countdown()
      }, 1000)
    },
  
    _gettbapi(){
      let obj ={}
      obj.api = 'TbkItemInfoGetRequest'
      obj.setNumIids = this.$route.query.goods_id
      gettbapi(obj).then((res)=>{
        if (res.status ==200) {
          this.tbapiData = res.data.results.n_tbk_item[0]
        } else {
          Toast.fail(res.msg)
        }
      })
    },
    _getgoodsinfo(){
      let obj = {}
      obj.uid = localStorage['_shop_userId']
      obj.token = localStorage['_shop_token']
      obj.id = this.id
      Toast.loading({
        mask: true
      })
      getgoodsinfo(obj).then((res)=>{
        if (res.status == 200) {
           this.goodsinfo = res.data

           this.saveMoney = res.data.couponName.substring(res.data.couponName.indexOf('减')+1,res.data.couponName.length-1)
           this.couponEnd= res.data.couponEnd
           this._countdown()
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
    go(url) {
      if (url=='back') {this.$router.back()}
      else {
        this.$router.push({
          path: url
        })
      }
    }
  },
  components: {
    Swipelist,Goodslist,Comment
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" >
  .goods
    overflow-x: hidden
    .pop-more
      position:fixed
      top:45px
      right:10px
      background-color:#fff
      box-shadow:0 0 20px 2px rgba(0,0,0,0.1)
      border-radius:4px
      z-index:2005
      div
        width:130px
        height:50px
        border-bottom:1px solid #f0f1f2
        display:flex
        align-items:center
        padding-left:20px
        img
          width:16px
          height:16px
        span
          font-size:15px
          color:15px
          margin-left:15px
        &:last-child
          border:0
    .fade-enter-active,.fade-leave-active
      transition: all .3s ease
    .fade-enter,.fade-leave-to
      transform: translateY(-10px)
      opacity:0
    .pop-cover
      position:fixed
      top:0
      left:0
      width:100vw
      height:100vw  
      z-index:20
    .goods-head
      position:fixed
      width:100%
      top:0px
      z-index:2
      .goods-head-box
        display: flex;
        justify-content: space-between;
        margin: 10px 20px 10px 20px;
        .goods-head-right
          left:90%
        span
          display: inline-block;
          height: 27px;
          color: #fff;
          width: 25px;
          line-height: 30px;
          background: rgba(0,0,0,.3);
          border-radius: 100px;
          padding-left: 5px;
          padding-top: 3px;
      .goods-head-fixed
        position:fixed
        width:100%
        top:0px
        .goods-head-fixed-content
          background:#fff
          margin: 0 auto;
          display: flex;
          text-align: center;
          justify-content: space-around;
          align-items: center;
          span
            height: 18px;
            width: 10%;
          .van-tabs
            width:70%
            z-index:2
    .swipe-box
      position:relative
      .van-swipe
        width:100vw
        img
          width:100%
    .banner1
      text-align:center
      align:center
      label
        display:flex
        flex-direction: column;
    .goods-title
      padding:5px 12px
    .goods-price
      font-size:12px
      color:red
      padding-left:15px
      .span-price
        font-size:16px
        padding-left:5px
    .goods-other-price
      font-size:12px
      color:#666
      padding:2px 15px
    .list-goods-quan
      font-size:12px
      img
        width: 100%;
        height: 100px;
      .quan-box
        .goods-quan-text
          width: 100%;
          color: #fff;
          position: absolute;
          margin-top: -97px;
          padding: 0px 31px;
          span
            font-size:16px
          .van-col--8  
            padding-top: 7%;
    .goods-desc
      padding: 5px 15px;
      font-size:12px
      color:#777
    .goods-shop-box
      font-size:12px
      padding: 0px 15px;
      p
        margin-top:0px
  .similar
    p
      text-align:center
  .goods-detail
    p
      text-align:center 
    .goods-content
      background: $color-recommend-background
      text-align: center
      padding: 0px 5px
      margin: 0 auto;
  .goods-buy
    position: fixed;
    zoom: 1;
    bottom: 0;
    z-index: 500;
    left: 0;
    width: 100%;
    .goods-buy-box
      position: relative;
      zoom: 1;
      padding-top: 7px;
      z-index: 5;
      background: #fff;
      box-shadow: 0 -2px 2px 0 rgba(0,0,0,.1);
      .van-col
        display:flex
        flex-direction: column;
        text-align:center
  .googs-list--box
    background:#f0f0f0
  .goods-list--box::after
    display: table;
    clear: both;
    content: "";

</style>
