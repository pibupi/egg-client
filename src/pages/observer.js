import React from 'react'
import router from 'umi/router'
import { useObserverHook } from '@/hooks'
// let observer
export default function(props) {
  // const [state, setState] = useState()

  // useEffect(() => {
  //   console.log('进入页面')
  //   observer = new IntersectionObserver(entries => {
  //     console.log(entries)
  //     // * intersectionRatio 表示元素是否进入到可是区域内
  //     // * isIntersecting 子元素是否可见
  //   })
  //   observer.observe(document.querySelector('#loading'))
  //   return () => {
  //     console.log('离开页面')
  //     if (observer) {
  //       // 解绑元素
  //       observer.unobserve(document.querySelector('#loading'))
  //       // 停止监听
  //       observer.disconnect()
  //     }
  //   }
  // }, [])
  useObserverHook('#loading', entries => {
    console.log(entries)
  })
  const handleClick = () => {
    router.push('/')
  }
  return (
    <div>
      observer
      <button onClick={handleClick}>首页</button>
      <div
        id="loading"
        style={{
          width: '100px',
          height: '100px',
          background: '#f60',
          marginTop: '1000px'
        }}
      >
        loading
      </div>
    </div>
  )
}
