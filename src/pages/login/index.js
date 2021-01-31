import React, { useEffect } from 'react'
import { List, InputItem, Button, Toast } from 'antd-mobile'
import { createForm } from 'rc-form'
import router from 'umi/router'
import { useStoreHook } from 'think-react-store'

import './index.less'
function Login(props) {
  // const [state, setState] = useState()
  const {
    user: { loginAsync }
  } = useStoreHook()
  const { getFieldProps, validateFields } = props.form

  useEffect(() => {}, [])
  const handleSubmit = () => {
    validateFields((err, value) => {
      if (err) {
        Toast.fail('请将信息填写完整')
        return
      } else {
        loginAsync(value)
      }
    })
  }
  const handleClick = () => {
    router.push('/register')
  }
  return (
    <div className="login-page">
      <List renderHeader={() => '用户登录'}>
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
      </List>
      <Button type="warning" onClick={handleSubmit}>
        登录
      </Button>
      <div className="register" onClick={handleClick}>
        没有账户，去注册
      </div>
    </div>
  )
}
export default createForm()(Login)
