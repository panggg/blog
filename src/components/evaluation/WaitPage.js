import React,{ Component } from 'react'
import './WaitPage.css'
import {Link} from 'react-router'
class WaitPage extends Component {
  render () {
    const {
      imgSrc,
      titOne,
      titTwo,
      jumpUrl
    } = this.props
    return (
      <div className="main-wait">
        <div className="warp-wait">
          <div className="img">
            <img src={imgSrc} alt="图片"/>
          </div>
          <p className="title-1">{titOne}</p>
            {titTwo===""?null:<p className="title-2"><Link to={jumpUrl}>{titTwo}</Link></p>}
        </div>
      </div>
    )
  }
}
export default WaitPage
