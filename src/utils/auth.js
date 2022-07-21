import Cookies from 'js-cookie'
const TokenKey = 'HOUTAI'
// 创建/获取
export function getToken () {
  return Cookies.get(TokenKey)
}
// 取值/设置
export function setToken (token) {
  return Cookies.set(TokenKey, token)
}
// 删除/移除
export function removeToken () {
  return Cookies.remove(TokenKey)
}
