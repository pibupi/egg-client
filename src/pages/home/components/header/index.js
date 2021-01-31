import React, { useEffect, memo, useState } from 'react'
import { Link } from 'umi'
import { cookie } from 'project-libs'
function Header(props) {
  const [username, setState] = useState(localStorage.getItem('username'))

  useEffect(() => {
    cookie.get('user')
  }, [])

  return (
    <div className="header">
      <div className="header_title">民宿</div>
      <div className="header_login">
        {username
          ? username
          : <Link to="/login">登录</Link> | <Link to="/register">注册</Link>}
      </div>
    </div>
  )
}
export default memo(Header)
