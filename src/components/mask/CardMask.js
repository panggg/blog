import React, {
  Component
} from 'react'
import './CardMask.css'
import zongheCard from '../common/images/zonghe_bg.png'
import sleepCard from '../common/images/sleep_bg.png'
import eatCard from '../common/images/eat_bg.png'
import zhiCard from '../common/images/zhi_bg.png'
import playCard from '../common/images/play_bg.png'
import babyTouxiang from '../common/images/mask_baby.png'
import shareIcon from '../common/images/share_btn.png'
import closeIcon from '../common/images/close_icon.png'
import shareArrow from '../common/images/share_arrows.png'
const maskbgSrc = [sleepCard, eatCard, zhiCard, playCard, zongheCard]
class CardMask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shareMaskIsshow: false
    }
  }
  showShareMask = () => {
    this.setState({
      shareMaskIsshow: true
    })

  }
  hideShareMask = () => {
    this.setState({
      shareMaskIsshow: false
    })
  }
  render() {
    const {
      cardType,
      visible,
      handleClick
    } = this.props
    let maskVisible = ''
    let shareMask = ''
    maskVisible = visible === true ? "CardMask" : "CardMask hide"
    shareMask = this.state.shareMaskIsshow === true ? "shareMask" : "shareMask hide"
    return (
      <div className={maskVisible}>
        <div className="MaskContent" style={{"backgroundImage":"url("+maskbgSrc[cardType]+")"}}>
          <img onClick={handleClick} className="closeIcon" src={closeIcon} alt=""/>
          <img className="kidTouxiang" src={babyTouxiang} alt=""/>
          <p className="shareBtn"><img onClick={this.showShareMask} src={shareIcon} alt=""/></p>
        </div>
        <div className={shareMask} onClick={this.hideShareMask}>
          <img src={shareArrow} alt=""/>
        </div>
      </div>
    )
  }
}

export default CardMask