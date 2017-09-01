import React, {
  Component
} from 'react'
import '../common/css/rem.css'
import '../common/css/wap-common.css'
import '../common/js/rem.js'
import CardMask from './CardMask.js'


class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
  }
  handleClick = () => {
    this.setState({
      visible: false
    })
  }
  render() {
    return (
      <div>
        <CardMask visible={this.state.visible}  handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default Example
