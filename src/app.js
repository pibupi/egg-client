// import { cookie } from 'project-libs'
// * 运行时配置，用来做登录校验
import router from 'umi/router'
export function onRouteChange(route) {
  console.log(route)
  const nowPath = route.routes[0].routes.filter(
    item => item.path === route.location.pathname
  )
  console.log(nowPath)
  // const isLogin = cookie.get('user') //! 这个方法有问题！！！
  // const isLogin = JSON.parse(getCookie('user'))
  const isLogin = localStorage.getItem('token')
  // console.log(isLogin)
  if (nowPath.length === 1 && nowPath[0].auth && !isLogin) {
    router.push({
      pathname: '/login',
      query: {
        from: route.location.pathname
      }
    })
  }
}
function getCookie(name) {
  let arr
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if ((arr = document.cookie.match(reg))) return unescape(arr[2])
  else return null
}
