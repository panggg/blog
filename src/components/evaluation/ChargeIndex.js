import React,{ Component } from 'react'
import WaitPage from './WaitPage'
import ChargeImg from '../common/images/yellow_child.png'

export default class ChargeIndex extends Component{
  render(){
    return (
        <div className="ChargeIndex">
          <WaitPage imgSrc={ChargeImg} titOne='您已缴费！' titTwo='查看缴费记录' jumpUrl='/charge/record'/>
        </div>
      )
  }
}
