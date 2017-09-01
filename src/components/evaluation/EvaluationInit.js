import React, { Component } from 'react'
import './EvaluationInit.css'

export default class EvaluationInit extends Component {
  render() {
    const {
      imgSrc
    } = this.props
    return(
      <div className="main">
        <div className="warp">
          <img src={imgSrc} alt="图片" />
        </div>
      </div>
    )
  }
}