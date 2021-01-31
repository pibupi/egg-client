import { useEffect } from 'react'
import { isEmpty } from 'project-libs'
let observe
export default function useImgHook(ele, callback, watch = []) {
  // * 监听图片是否进入可是区域
  // * 将src属性值替换为真实的图片地址,data-src
  // * 停止监听当前的节点
  useEffect(() => {
    const nodes = document.querySelectorAll(ele)
    console.log(nodes)
    // if (nodes && nodes.length) {
    if (!isEmpty(nodes)) {
      observe = new IntersectionObserver(entries => {
        callback && callback(entries)
        entries.forEach(item => {
          console.log(item)
          if (item.isIntersecting) {
            const dataSrc = item.target.getAttribute('data-src')
            item.target.setAttribute('src', dataSrc)
            observe.unobserve(item.target)
          }
        })
      })
      nodes.forEach(item => {
        observe.observe(item)
      })
    }
    return () => {
      // if (nodes && nodes.length && observe) {
      if (!isEmpty(nodes) && observe) {
        observe.disconnect()
      }
    }
  }, watch)
}
