import React, { useEffect } from 'react'
import { Button } from 'antd-mobile'
export default function(props) {
  // const [state, setState] = useState()

  useEffect(() => {}, [])
  const renderPay = () => {
    switch (props.type) {
      case 0:
        return (
          <Button type="warning" size="small">
            去支付
          </Button>
        )
      case 1:
        return <Button size="small">已完成</Button>
      default:
        break
    }
  }
  return (
    <div className="order-item">
      <img src={props?.img} alt="order" />
      <div className="center">
        <div className="title">{props?.title}</div>
        <div className="price">{props?.price}</div>
        <div className="time">{props?.createTime}</div>
      </div>
      <div className="pay">{renderPay()}</div>
    </div>
  )
}
