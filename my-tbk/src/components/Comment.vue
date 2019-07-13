<template>
  <div class="comment">
    <div class="comment-title" >
        <van-row type="flex" justify="space-between">
            <van-col span="8">商品评论（123）</van-col>
            <van-col style="color:red" span="6">查看全部></van-col>
        </van-row>
    </div>
    <div class="comment-tag">
      <van-tag round color="#f2826a">标签dsfsdfs</van-tag>
      <van-tag round color="#f2826a">标签dsfsdfs</van-tag>
      <van-tag round color="#f2826a">标签dsfsdfs</van-tag>
      <van-tag round color="#f2826a">标签dsfsdfs</van-tag>
      <van-tag round color="#f2826a">标签dsfsdfs</van-tag>
      <van-tag round color="#f2826a">标签dsfsdfs</van-tag>
    </div>
    <div class="comment-text">
      <div class ="comment-text-head">
        <span>
          <img src="https://img.alicdn.com/imgextra//3d/a7/TB1TpVxRFXXXXaYXXXXSutbFXXX.jpg"/>
        </span>
        <span style="padding-left: 15px;       ">
          s**f
        </span>
      </div>
      <div class = "comment-text-content">
        卖家真是太良心了吧，怎么可以这么物超所值。完美！即使快递把花?摔掉了我也觉得真的超值
      </div>
      <div class = "comment-text-foot">
        2019-06-28 颜色分类:白掌-小高透方盆;是否含花盆:带盆栽好
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
     
    }    
  },
  created() {
 
  },
  methods: {
  
  },
  components: {}
};
</script>
<style scoped lang="stylus" >
  .comment
    .comment-title
      font-size:12px
      text-align:center
    .comment-tag
      padding: 5px 15px 5px 15px
    .comment-text
      padding-left:15px
      .comment-text-head
        img
          position: relative;
          top: 5px;
          width:24px
          hegith:24px
          border-radius: 20px;
      .comment-text-content
        font-size: 13px;
        word-break: break-all;
        display: -webkit-box;
      .comment-text-foot
        text-overflow: ellipsis;
        overflow: hidden;
        padding-top: 8px;
        font-size:10px
        color: #999;
</style>