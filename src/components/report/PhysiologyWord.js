import React ,{ Component } from 'react'
import './Physiology.css'

export default class PhysiologyWord extends Component {
  render(){
    const {PhysiologyWordTitle,PhysiologyWordDetail} = this.props
    return (
      <div className="PhysiologyBox">
        <span className="PhysiologyWord">{PhysiologyWordTitle}：</span>{PhysiologyWordDetail}
      </div>
    )
  }
}
