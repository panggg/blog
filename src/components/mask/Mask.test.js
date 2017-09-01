import React, {
  Component
} from 'react'
import '../common/css/rem.css'
import '../common/css/wap-common.css'
import '../common/js/rem.js'
import Mask from './Mask.js'
import maskImg from '../common/images/mask_bg.png'

class Example extends Component {
  state = {
    visible: false
  }
  showMask = () => {
    this.setState({
      visible: true
    })
  }
  handleClick = () => {
    this.setState({
      visible: false
    })
  }
  render() {
    return (
      <div>
        <p onClick={this.showMask} >点击出弹框</p>
        <Mask visible={this.state.visible} handleClick={this.handleClick} maskImg={maskImg} btnText="确定">
          <p>恭喜你</p>
          <p>您已完成测评！！！</p>
        </Mask>
      </div>
    )
  }
}

export default Example
