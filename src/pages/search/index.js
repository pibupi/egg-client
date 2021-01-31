import React, { useState, useEffect } from 'react'
import { SearchBar, ActivityIndicator } from 'antd-mobile'
import { useHttpHook, useObserverHook, useImgHook } from '@/hooks'
import { useLocation } from 'react-router-dom'
import { ShowLoading } from '@/components'
import { CommonEnum } from '@/enums'
import './index.less'
export default function(props) {
  const { query } = useLocation()
  console.log(query)
  const [houseName, setHouseName] = useState('')
  const [page, setPage] = useState(CommonEnum.PAGE)
  const [houseLists, setHouselists] = useState([])
  const [showLoading, setShowLoading] = useState(true)
  const [houseSubmitName, setHouseSubmitName] = useState()
  const [houses, loading] = useHttpHook({
    url: '/house/search',
    body: {
      ...page,
      houseName,
      code: query?.code,
      startTime: query?.startTime && query.startTime + ' 00:00:00',
      endTime: query?.endTime && query.endTime + ' 23:59:59'
    },
    watch: [page.pageNum, houseSubmitName]
  })
  // * 监听loading是否展示出来(dom节点展示状态)
  // * 修改分页数据，监听分页数据的修改，发送请求下一页数据
  // * 监听loading变化，拼装数据(请求的loading状态)
  useObserverHook(
    '#' + CommonEnum.LOADING_ID,
    entries => {
      console.log(entries)
      if (!loading && entries[0].isIntersecting) {
        setPage({
          ...page,
          pageNum: page.pageNum + 1
        })
      }
    },
    null
  )
  useImgHook('.item-img', entries => {}, null)
  const handleChange = value => {
    setHouseName(value)
  }
  const _handleSubmit = value => {
    setHouseName(value)
    setHouseSubmitName(value)
    setPage(CommonEnum.PAGE)
    setHouselists([])
  }
  const handleCancel = () => {
    _handleSubmit('')
  }
  const handleSubmit = value => {
    _handleSubmit(value)
  }
  useEffect(() => {
    if (!loading && houses) {
      if (houses.length) {
        setHouselists([...houseLists, ...houses])
        if (houses.length < page.pageSize) {
          setShowLoading(false)
        }
      } else {
        setShowLoading(false)
      }
    }
  }, [loading])

  return (
    <div className="search-page">
      {/* 顶部搜索栏 */}
      <SearchBar
        placeholder="搜索民宿"
        value={houseName}
        onChange={handleChange}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
      {/* 搜索结果 */}
      {!houseLists.length ? (
        <ActivityIndicator toast />
      ) : (
        <div className="result">
          {houseLists.map(item => {
            return (
              <div className="item" key={item.id}>
                <img
                  style={{ width: '160px', height: '160px' }}
                  src={require('../../assets/yay.jpg')}
                  className="item-img"
                  alt="img"
                  data-src={item?.imgs[0]?.url}
                />
                <div className="item-right">
                  <div className="title">{item.name}</div>
                  <div className="price">{item.price}</div>
                </div>
              </div>
            )
          })}
          <ShowLoading showLoading={showLoading} />
        </div>
      )}
    </div>
  )
}
