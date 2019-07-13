<template>
  <div class="goods-list-compon">
    <div class="goods-card">
    <div class="goods-list-img">
      <img :src="msg.imgUrl" >
    </div>
    <div class="goods-list-title">
 
      <div class="van-ellipsis"><van-icon style ="padding: 1px;" name="fire" />{{msg.title}}</div>
    </div>
    <van-row style="font-size: 12px;padding:  5px">
      <van-col span="12">天猫价 ¥{{msg.oprice}}</van-col>
      <van-col  span="12" style="overflow: hidden">已售<span style="color:red">{{msg.oprice}}万</span>件</van-col>
    </van-row>

    <van-row>
      <van-col span="16" style="color:red">券后价 <span style="font-size: 16px">¥{{msg.price}}</span></van-col>
      <van-col span="8">
        <div class="quan-box">
          <span class="goods-quan">5元券</span>
        </div></van-col>
    </van-row>
</div>
 
  </div>
</template>

<script>

export default {
  props: {
    msg: {
        id:0,
        title:'1800g20片手抓饼早餐家庭装',
        imgUrl:'https://img.alicdn.com/imgextra/i4/2453813882/TB2lsR9XQ9WBuNjSspeXXaz5VXa_!!2453813882.jpg_310x310.jpg_.webp',
        url:'',
        price:'19.19',
        oprice:'29.19',
        text:'4.5万人已领，10元券'
    }
  },
  data() {
    return {

      active: 0,
      hotList:[{
        id:0,
        title:'1800g20片手抓饼早餐家庭装',
        imgUrl:'https://img.alicdn.com/imgextra/i1/1057690919/O1CN01H921QB1IewW7K1qZu_!!1057690919.jpg_310x310.jpg_.webp',
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
        imgUrl:'https://img.alicdn.com/imgextra/i1/1057690919/O1CN01H921QB1IewW7K1qZu_!!1057690919.jpg_310x310.jpg_.webp',
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
  created() {
    console.log('1')
  },
  methods: {
  
  },
  components: {}
};
</script>
<style scoped lang="stylus" >
  .goods-list-compon
    background:#f0f0f0
    width:50%
    padding-bottom:2px
    float:left
    box-sizing: border-box;
    .goods-card
      margin:2px;
      padding:3px 2px;
      background: #fff;
    .goods-list-title
      padding-top:6px
      .van-ellipsis
        .van-icon
          color:red
    .goods-list-img
      img
        border-radius:6px
        width:100%
    .van-row
      display:flex
      justify-content: space-between;
      align-items: center;
      padding: 2px 0 2px 5px;
      font-size:14px
      color:#777
    .quan-box
      width:50px; 
      overflow: hidden;
      position: relative;
      .goods-quan
        color:red
        font-size:12px
        background: #fff;
        font-style: normal;
        border-radius: 3px;
        text-align: center;
        border: 1px solid #fd5a5f;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: block;
        height: 18px;
  .goods-foot
    margin-bottom:50px
</style>

<style type="text/css">
  .goods-quan::before{
    position: absolute;
    right: -4px;
    top: 50%;
    margin-top: -3px;
    background: #fff;
    display: block;
    width: 5px;
    height: 5px;
    content: "";
    border-radius: 10px;
    border: 1px solid #fd5a5f;
  }
 .goods-quan::after {
    position: absolute;
    left: -4px;
    top: 50%;
    margin-top: -3px;
    background: #fff;
    display: block;
    width: 5px;
    height: 5px;
    content: "";
    border-radius: 10px;
    border: 1px solid #fd5a5f;
  }
</style>