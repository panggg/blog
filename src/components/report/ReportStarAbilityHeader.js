import React, { Component } from 'react'
import { Rate } from 'antd'

export default class ReportStarAbilityHeader extends Component {
  state = {
    value: 1
  }
  render() {
    const { value } = this.state
    return (
      <div className="intelligen">
        <ul>
          <li>智能区</li>
        </ul>
        <ul>
          <li>能力值</li>
          <li className="star"><span className="starRate"><Rate value={value} count={1} /></span>评量能力值</li>
          <li className="statGray"><span className="starRate"><Rate count={1} /></span>标准能力值</li>
        </ul>
        <ul>
          <li>百分位</li>
          <li>在实测儿童中</li>
          <li>的位置占比</li>
        </ul>
      </div>
    )
  }
}
