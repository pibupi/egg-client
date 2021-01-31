import React, { useEffect } from 'react'
import Header from './components/header'
import Hot from './components/hot'
import Search from './components/search'
import { ErrorBoundary } from '@/components'
import { useHttpHook } from '@/hooks'
// import { Http } from '@/utils'

import './index.less'
export default function(props) {
  // const [state, setState] = useState()
  const [citys, citysLoading] = useHttpHook({
    url: '/commons/citys'
  })
  // const user = await Http({
  //       url: '/commons/citys',
  //       // body: payload
  //     })
  const [houses] = useHttpHook({
    url: '/house/hot'
  })
  useEffect(() => {}, [])

  return (
    <ErrorBoundary>
      <div className="home">
        {/* 登录 */}
        <Header />
        {/* 搜索 */}
        {citys && <Search citys={citys} citysLoading={citysLoading} />}
        {/* 热门民宿 */}
        {houses && <Hot houses={houses} />}
      </div>
    </ErrorBoundary>
  )
}
