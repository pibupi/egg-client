import React, { Component } from 'react'
// * 这个错误边界不能检测到组件本身，只能检测到子组件的错误，或者定时器延迟了也不行
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: false
    }
  }

  static getDerivedStateFromError(error) {
    console.log(error)
    return {
      flag: true
    }
  }

  componentDidCatch(error, info) {
    // 日志相关操作
  }

  render() {
    return <div>{this.state.flag ? <h1>发生错误，请稍后再试</h1> : this.props.children}</div>
  }
}
