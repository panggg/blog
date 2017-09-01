import React, {
  Component
} from 'react'
import './Mask.css'


class Mask extends Component {
  render() {
    const {
      visible,
      handleClick,
      maskImg,
      btnText
    } = this.props
    let maskVisible = ''
    maskVisible = visible === true ? "maskBox" : "maskBox hide"
    return (
      <div className={maskVisible}>
        <div className="maskContent">
          {this.props.children}
          <p><img src={maskImg} alt=""/></p>
          <div>
            <p onClick={handleClick}>{btnText}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Mask;
