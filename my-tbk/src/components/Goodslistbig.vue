<template>
  <div class="goods-list-big">
    <div class = "list-box">
      <div class ="list-top">
        <div class= "list-top-left">
          <img :src="msg.imgUrl"/>
        </div>
        <div class= "list-top-right">
          <div class = "list-topright-title">
            <van-tag type="danger">{{msg.shopFrom}}</van-tag><span style="padding-left:4px"> {{msg.title}} </span>
          </div>
          <div class = "list-toprigth-content" style=" display: flex;    padding: 0 5px 0 0px;justify-content: space-between;">
            <van-tag plain type="danger">{{msg.couponName}}</van-tag>
            <label>已售{{msg.sales}}件</label>
          </div>
         <div style="color:#999;display: flex;justify-content: space-around;    align-items: center;">
          <span>券后</span><label style="font-size:18px;padding-left:10px;color:red">${{msg.finalPrice}}</label><del style="padding-left:10px">￥{{msg.price}}</del>   <van-button round type="danger" size="small"> <van-icon style="padding-right:3px" name="share" /> 赚 {{msg.rateMoney}}  &nbsp;</van-button>
          </div>
     
        </div>

      </div>
    
   </div>
  </div>
</template>

<script>

export default {
  props: {
    msg: {
        id:0,
        title:'1800g20片手抓饼早餐家庭0片手抓饼早餐家0片手抓饼早餐家装',
        imgUrl:'https://img.alicdn.com/imgextra/i4/2453813882/TB2lsR9XQ9WBuNjSspeXXaz5VXa_!!2453813882.jpg_310x310.jpg_.webp',
        url:'',
        price:'19.19',
        oprice:'29.19',
        text:'4.5万人已领，10元券',
        saveMoney:0,
        finalMoney:0

    }
  },
  data() {
    return {
      finalMoney:0,
      saveMoney:0,
    }    
  },
  mounted() {
   this.$nextTick(function () {
      if (this.msg.couponName) {
          this.saveMoney =this.msg.couponName.indexOf('元无条件')>0 ? this.msg.couponName.substring(0,this.msg.couponName.indexOf('元无条件')) : this.msg.couponName.substring(this.msg.couponName.indexOf('减')+1,this.msg.couponName.length-1)
         
      }
        this.finalMoney = this.msg.price - this.saveMoney
        // console.log(this.saveMoney)
      })

  },
  methods: {
  
  },
  components: {}
};
</script>
<style scoped lang="stylus" >
  .goods-list-big
    margin: 5px 3px 8px 3px;
    .list-box
      padding: 5px;
      border: 1px solid #d6c9c9;
      border-radius: 5px;
      display:flex
      flex-direction: column;
      .list-top
        display:flex
        flex-direction: row;
        .list-top-left 
          padding: 5px;
          img
            border-radius: 6px;
            width:120px
        .list-top-right
          font-size:12px
          .list-topright-title
            overflow:hidden
            font-size:12px
            padding-bottom:5px
          .list-down
            padding-left: 50%;
     
</style>
 