import React, { useState, useEffect, memo } from 'react'
import { Picker, List, Calendar, Button, Toast } from 'antd-mobile'
import dayjs from 'dayjs'
import router from 'umi/router'
function Search(props) {
  const [citys, setCitys] = useState()
  const [selectedCity, setSelectedCity] = useState(['10001'])
  const [times, setTimes] = useState('可选时间')
  const [dateShow, setDateShow] = useState(false)
  const handleCityChange = value => {
    setSelectedCity(value)
  }
  const handleDate = () => {
    setDateShow(!dateShow)
  }
  const handleConfirm = (startTime, endTime) => {
    setDateShow(!dateShow)
    setTimes(
      dayjs(startTime).format('YYYY-MM-DD') +
        '~' +
        dayjs(endTime).format('YYYY-MM-DD')
    )
  }
  const handleClick = () => {
    if (times.includes('~')) {
      router.push({
        pathname: '/search',
        query: {
          code: selectedCity,
          startTime: times.split('~')[0],
          endTime: times.split('~')[1]
        }
      })
    } else {
      Toast.fail('请选择时间')
    }
  }
  useEffect(() => {}, [])

  return (
    <div className="search">
      {/* 可选城市 */}
      <div className="search-addr">
        {!props.citysLoading && (
          <Picker
            title="城市"
            data={props.citys}
            value={selectedCity}
            cascade={false}
            cols={1}
            onChange={handleCityChange}
          >
            <List.Item>可选城市</List.Item>
          </Picker>
        )}
      </div>
      {/* 可选时间 */}
      <div className="search-time" onClick={handleDate}>
        <p className="search-time-left">出租时间</p>
        <p className="search-time-right">{times}</p>
      </div>
      {/* 点击按钮 */}
      <Button type="warning" size="large" onClick={handleClick}>
        搜索民宿
      </Button>
      <Calendar
        visible={dateShow}
        onCancel={handleDate}
        onConfirm={handleConfirm}
      />
    </div>
  )
}
function areEqual(preProps, nextProps) {
  console.log(preProps)
  console.log(nextProps)
  if (
    preProps.citys === nextProps.citys &&
    preProps.citysLoading === nextProps.citysLoading
  ) {
    return false
  } else {
    return true
  }
}
export default memo(Search, areEqual)
