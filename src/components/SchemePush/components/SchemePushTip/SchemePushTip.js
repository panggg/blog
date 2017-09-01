import React from 'react'
import './SchemePushTip.css'
import tipClose from '../../../common/images/scheme_close.png'

class SchemePushTip extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      tipVisible:false
    }
  }
  handleClick = () =>{
    this.setState({tipVisible:true})
  }
  render(){
    return(
      <div className={this.state.tipVisible?'tipHide pushTipBox':'tipShow pushTipBox'} >
        <div className="pushTip">
          <p>最新推送了4篇方案</p>
          <a onClick={this.handleClick}><img src={tipClose} alt=""/></a>
        </div>
      </div>
    )
  }
}

export default SchemePushTip
