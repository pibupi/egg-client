import React, { useEffect } from 'react'
import { ShowLoading } from '@/components'
import { timer } from '@/utils'
export default function(props) {
  // const [state, setState] = useState()

  useEffect(() => {}, [])

  return (
    <div className="comment">
      <h1 className="comment-title">评论</h1>
      <div className="comment-lists">
        {props?.lists?.map(item => (
          <div className="comment-lists-item" key={item?.id}>
            <img src={item?.avatar} alt="user" className="avatar" />
            <div className="right">
              <div className="right-top">
                <p>{item?.username}</p>
                <p>{timer(item?.crateTime)}</p>
              </div>
              <div className="right-bottom">{item?.info}</div>
            </div>
          </div>
        ))}
        <ShowLoading showLoading={props?.showLoading} />
      </div>
    </div>
  )
}
