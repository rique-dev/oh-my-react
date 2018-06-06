import React, { Component } from 'react'
import NProgress from 'nprogress'

export default class BarProgress extends Component {
  componentWillMount() {
    NProgress.start()
  }

  componentWillUnmount() {
    NProgress.done()
  }

  render() {
    return <div />
  }
}
