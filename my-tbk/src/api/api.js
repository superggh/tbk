/**
 * 前端
 * 2017-11-10
 */
import axios from 'axios' 
import {stringify} from 'qs'
import {encode} from './password'
import { promises } from 'fs';
import { reject } from 'q';

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

export function getData(url, data) { // 走token的接口 
  if (data.uid || data.user_id) {
    return encode().then((res) => {
      data.token = res 
      return axios.post(url, stringify(data)).then((res) => {
        return Promise.resolve(res.data)
      })
    })
  } else { // 不走token的接口
    return axios.post(url, stringify(data)).then((res) => {
      return Promise.resolve(res.data)
    })
  }
}
export function getUrl() {
  return 'https://api.angula.net/freeshop/'
}
export function getv3Url() {
  return 'http://api.ezoonet.com/v3index/'
}

function get(urls, obj) {
  const url = getUrl() + urls
  const data = obj
  return getData(url, data)
}
function getv3(urls, obj) {
  const url = getv3Url() + urls
  const data = obj
  return getData(url, data)
}
// 登录
export function login(obj) {
  return get('user/login', obj)
}
// 首页信息
export function gethomeinfo(obj) {
  return get('shop/gethomeinfo', obj)
}

export function getgoodsinfo(obj) {
  return get('shop/getgoodsinfo', obj)
}

export function gettbapi(obj) {
  return get('shop/gettbapi', obj)
}

export function search(obj) {
  return get('shop/search', obj)
}
export function gettop(obj) {
  return get('shop/gettop', obj)
}
export function gettbdetail(obj) {
  return get('shop/gettbdetail', obj)
}
export function getlist(obj) {
  return get('shop/getlist', obj)
}
export function curlUrl(obj) {
  return get('shop/curlUrl', obj)
}