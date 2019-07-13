<template>
  <div class="my">
      <div class="userinfo">
        <div class="userhead">
            <img src="https://cmsstatic.dataoke.com//wap_new/user/images/user_info_tx.png?v=201906201943" >
            <span >登录注册</span>
        </div>
        <div class="setting">
          <van-icon name="setting-o" />
       </div>
      </div>

      <div class="userlist">
        <van-cell  icon="location-o" title="我的收藏" is-link size="large">
          <template slot="icon">
            <img src="https://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_like.svg">
          </template>  
         </van-cell>
        <van-cell  icon="location-o" title="我的团队" is-link size="large">
          <template slot="icon">
            <img src="https://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_like.svg">
          </template>  
         </van-cell>
 
        <van-cell  icon="location-o" title="浏览记录" is-link size="large">
          <template slot="icon">
            <img src="https://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_history.svg">
          </template>  
         </van-cell>
        
        <van-cell  icon="location-o" title="意见反馈" size="large" is-link>
          <template slot="icon">
            <img src="https://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_feedback.svg">
          </template>  
         </van-cell>
         
        <van-cell  icon="location-o" title="联系客服" size="large" is-link>
          <template slot="icon">
            <img src="https://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_servicer.svg">
          </template>  
         </van-cell>     
         
        <van-cell  icon="location-o" title="帮助" size="large" is-link>
          <template slot="icon">
            <img src="https://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_help.svg">
          </template>  
         </van-cell> 

         <van-uploader :after-read="afterRead" accept="*"/>

      </div>

  </div>
</template>

<script>
import Swipelist from "@/components/Swipelist.vue";
export default {
  data() {
      return {
        id: 0,
      }
    },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
        let formData = new FormData()
        formData.append('Files', file.file)

        const xhr = new XMLHttpRequest()
        xhr.open('POST',  'https://api.angula.net/freeshop/upload/upload', true)
        xhr.send(formData)
        xhr.onload = () => {
          if (xhr.status === 200 || xhr.status === 304) {
            let res = JSON.parse(xhr.responseText)
            if (res.status === 200) {
              console.log(res)
        
            } else {
              Toast.fail(res.msg)
            }
          } else {
            Toast.fail(`${xhr.status} 请求错误!`)
          }
        }
    }
  },
  mounted () {
    this.$parent.footshow = true
  },
  components: {
    Swipelist
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" >
  .userinfo
    background: linear-gradient(-90deg,#fa4dbe,#fbaa58);
    height: 48vw;
    max-height: 22rem;
    -webkit-background-size: 100% auto;
    -moz-background-size: 100% auto;
    background-size: 100% auto;
    overflow: hidden
    .userhead
      display:flex
      align-items: center;
      justify-content: space-between
      padding: 13% 10%
      img
        width: 24%
      span
        width:50%
        padding-right: 20%;
        color: #fff
        font-size:20px
    .setting
      color:#fff
      position: fixed;
      top: 19px;
      right: 25px;
  .userlist
    padding:5px 10px
    img
      padding-right:5px
</style>
