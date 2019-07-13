// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import VueI18n from 'vue-i18n';
import LangEn from './assets/lang/en';
import LangZhCHS from './assets/lang/zhCHS';
import VueLazyload from 'vue-lazyload';

Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(VueLazyload,{
	
})
Vue.use(VueI18n)



const i18n = new VueI18n({
  //定义默认语言
   locale:'zhCHS', 
   messages:{
    'en':LangEn,
    'zhCHS':LangZhCHS
  }
})

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
