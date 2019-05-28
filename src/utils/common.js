/* 项目使用的一些公共函数方法 */
exports.install = function (Vue, options) {
  /* 获取地址栏参数 */
  Vue.prototype.getQueryString = function () {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    let r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2])
    return null
  }
  /* 时间转换格式 yyyy-MM-dd */
  Vue.prototype.formDate = function (time) {
    if (!time) return ''
    let date = new Date(time)
    let Y = date.getFullYear() + '-'
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() + ' '
    return Y + M + D
  }
  /* 时间转换格式 yyyy-MM-dd hh:mm:ss */
  Vue.prototype.formDateTimes = function (time) {
    if (!time) return ''
    let date = new Date(time)
    let Y = date.getFullYear() + '-'
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
    let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
    let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
    let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    return Y + M + D + h + m + s
  }
  /* HTML转成实体字符 */
  Vue.prototype.escapeHTML = function (a) {
    let character = String(a)
    return character.replace(/&/g, '&amp')
      .replace(/</g, '&lt')
      .replace(/>/g, '&gt')
      .replace(/"/g, '&quot')
      .replace(/'/g, '&apos')
  }
  /* 实体字符转成HTML */
  Vue.prototype.unescapeHTML = function (a) {
    let character = String(a)
    return character.replace(/&lt/g, '<')
      .replace(/&gt/g, '>')
      .replace(/&amp/g, '&')
      .replace(/&quot/g, '"')
      .replace(/&apos/g, '\'')
      .replace(/;/g, '')
  }
}
