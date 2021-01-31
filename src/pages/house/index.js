import React, { useEffect } from 'react'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Info from './components/Info'
import Lists from './components/Lists'
import { useStoreHook } from 'think-react-store'
import { useObserverHook } from '@/hooks'
import { CommonEnum } from '@/enums'
import { useLocation } from 'react-router-dom'
import './index.less'
export default function(props) {
  const {
    house: {
      detail,
      getDetailAsync,
      getCommentsAsync,
      comments,
      reloadComments,
      reloadCommentsNum,
      showLoading,
      resetData
    }
  } = useStoreHook()
  const { query } = useLocation()
  // * 监听loading是否展示出来
  // * 触发reload，修改分页
  // * 监听reload变化，重新请求借口，拼接数据
  useObserverHook(
    '#' + CommonEnum.LOADING_ID,
    entries => {
      if (
        comments &&
        comments.length &&
        showLoading &&
        entries[0].isIntersecting
      ) {
        reloadComments()
      }
    },
    [comments, showLoading]
  )
  useEffect(() => {
    getDetailAsync({
      id: query?.id
    })
  }, [])
  useEffect(() => {
    getCommentsAsync({
      id: query?.id
    })
  }, [reloadCommentsNum])
  useEffect(() => {
    return () => {
      resetData({
        detail: {}
      })
    }
  }, [])
  return (
    <div className="house-page">
      <Banner banner={detail?.banner} />
      <Info detail={detail?.info} />
      <Lists lists={comments} showLoading={showLoading} />
      <Footer />
    </div>
  )
}
