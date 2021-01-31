import React, { useState, useEffect } from 'react'
import { List, Button } from 'antd-mobile'
import router from 'umi/router'
import { ErrorBoundary } from '@/components'

import { useStoreHook } from 'think-react-store'
import './index.less'
export default function(props) {
  // const [state, setState] = useState()
  const {
    user: { username, avatar, phone, sign, getUserAsync, logoutAsync }
  } = useStoreHook()

  useEffect(() => {
    getUserAsync({
      id: 10
    })
  }, [])
  const hanleClick = () => {
    router.push({
      pathname: '/user/edit',
      query: {
        id: 10
      }
    })
  }
  const handleLogout = () => {
    logoutAsync()
  }
  return (
    <ErrorBoundary>
      <div className="user-page">
        <div className="info">
          <div className="set" onClick={hanleClick}>
            设置
          </div>
          <div className="user"></div>
          <img
            src={avatar || require('../../assets/yay.jpg')}
            alt="alt"
            width="50"
          />
          <div className="tel">{phone}</div>
          <div className="sign">{sign}</div>
        </div>
        <div className="lists">
          <List>
            <List.Item arrow="horizontal">用户协议</List.Item>
            <List.Item arrow="horizontal">常见问题</List.Item>
            <List.Item arrow="horizontal">联系客服</List.Item>
          </List>
        </div>
        <Button style={{ marginTop: '100px' }} onClick={handleLogout}>
          退出登录
        </Button>
      </div>
    </ErrorBoundary>
  )
}
