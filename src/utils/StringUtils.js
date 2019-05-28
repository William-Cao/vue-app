module.exports = {
  /**
   * 函数节流
   * @param fn  函数
   * @param delay 多久执行一次
   * @param mustRunDelay 执行时间间隔
   * @return {Function}
   */
  throttle: function (fn, delay, mustRunDelay) {
    let timer = null
    let tStart
    return function () {
      let context = this
      let args = arguments
      let tCurr = +new Date()
      clearTimeout(timer)
      if (!tStart) {
        tStart = tCurr
      }
      if (tCurr - tStart >= mustRunDelay) {
        fn.apply(context, args)
        tStart = tCurr
      } else {
        timer = setTimeout(function () {
          fn.apply(context, args)
        }, delay)
      }
    }
  }
}
