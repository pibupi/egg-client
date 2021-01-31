import React, { useState, useEffect } from 'react'
import { List, InputItem, Button, Toast } from 'antd-mobile'
import { createForm } from 'rc-form'
import router from 'umi/router'
import { useStoreHook } from 'think-react-store'

import './index.less'
function Login(props) {
  // const [state, setState] = useState()
  const {
    user: { registerAsync }
  } = useStoreHook()
  const { getFieldProps, validateFields } = props.form

  useEffect(() => {}, [])
  const handleSubmit = () => {
    validateFields((err, value) => {
      if (err) {
        Toast.fail('请将信息填写完整')
        return
      } else {
        if (value.password !== value.password2) {
          Toast.fail('密码和确认密码要一致！')
          return
        }
        registerAsync(value)
      }
    })
  }
  const handleClick = () => {
    router.push('/login')
  }
  return (
    <div className="register-page">
      <List renderHeader={() => '用户注册'}>
        <InputItem
          placeholder="用户名"
          {...getFieldProps('username', {
            rules: [{ required: true }]
          })}
        >
          用户名
        </InputItem>
        <InputItem
          placeholder="密码"
          {...getFieldProps('password', {
            rules: [{ required: true }]
          })}
        >
          密码
        </InputItem>
        <InputItem
          placeholder="确认密码"
          {...getFieldProps('password2', {
            rules: [{ required: true }]
          })}
        >
          确认密码
        </InputItem>
      </List>
      <Button type="warning" onClick={handleSubmit}>
        注册
      </Button>
      <div className="login" onClick={handleClick}>
        已有账户，去登录
      </div>
    </div>
  )
}
export default createForm()(Login)
