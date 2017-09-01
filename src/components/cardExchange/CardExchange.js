import React,{Component} from 'react'
import exchangePage from '../common/images/card_exchange.png'
export default class CardExchange extends Component{
  render(){
    return(
      <div>
        <img src={exchangePage} alt="" style={{display: 'block',
    width: '100%'}} />
      </div>
    )
  }
}
