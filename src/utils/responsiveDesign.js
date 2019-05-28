/**
 * rem响应式方案的实现
 */
import { throttle } from './StringUtils'
const win = global
const doc = win.document
const baseWidth = 750
const documentHTML = doc.documentElement
let pixelRatio = 2
/**
 * 设置html根字体
 */
function setRootFont () {
  const docWidth = documentHTML.getBoundingClientRect().width
  const scale = docWidth / baseWidth
  documentHTML.style.fontSize = `${scale * 100}px`
  pixelRatio = global.devicePixelRatio === 3 ? 3 : 2
  documentHTML.setAttribute('data-dpr', pixelRatio)
}
setRootFont()
win.addEventListener('resize', throttle(setRootFont, 90, 100), false)
