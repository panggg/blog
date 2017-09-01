import React, { Component } from 'react'
import titleImg from '../common/images/titleImg.png'
import './ReportChartTip.css'
export default class ReportChartTip extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: this.props.visible
    }
  }
  handleClick = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  render() {
    const { titleWord } = this.props
    let titleWordIshow = ''
    titleWordIshow = this.state.isShow === true ? "titleBoxWord" : "titleBoxWord hide"
    return (
      <div className="titleBox">
        <img src={titleImg} role="presentation" className="titleImg" onClick={this.handleClick} alt="" />
        <div ref="TipWord" className={titleWordIshow} >{titleWord}</div>
      </div>
    )
  }
}
