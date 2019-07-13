<template>
  <div class="swipe-list">
 
     <div class="hot" >   
 
          <div class="hot-main">
            <div 
              class="hot-main-wrap"
              v-for="(item,index) in msg"
              :key="index"
              @click="goDeatil(item)"
            >
              <img   class="hot-main-img" :src="item.imgUrl"  >  
              <div class="hot-main-body" >
                <van-tag  color="#f2826a" size="large">{{item.text}}</van-tag>
                 <div class="hot-main-title van-ellipsis">{{item.title}}</div>  
                  <div class="hot-value-title">
                   
                    <span   class="hot-main-value">
                       ¥{{item.price}}
                    </span>
                    <span class = "hot-main-ovalue">
                      {{item.oprice}}
                    </span>
                  </div>
              </div>

            </div>
          </div>
        </div>



  </div>
</template>

<script>
import { Icon} from 'vant'
export default {
  props: {
    msg: Array,
    default:[]
  },
  data() {
    return {
      active: 0,
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
  created() {
    console.log('1')
    console.log(this.msg)
  },
  methods:{
    goDeatil(item){
      console.log('1')
      this.$router.push({
        path: '/goods/'+item.id,
      })  
    }
  },
  components: {}
};
</script>
<style scoped lang="stylus" >
 .hot
    .hot-main  
      display:flex
      padding-left:15px;
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
</style>