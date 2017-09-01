import React, {
  Component
} from 'react'
import './ShareCard.css'
import zongheCard from '../common/images/share_all.png'
import sleepCard from '../common/images/share_sleep.png'
import eatCard from '../common/images/share_eat.png'
import zhiCard from '../common/images/share_zhi.png'
import playCard from '../common/images/share_play.png'
import babyTouxiang from '../common/images/mask_baby.png'
import shareCore from '../common/images/share_bottom.jpg'
import shareLogo from '../common/images/logo.jpg'
import {
  wxShareTimeline
} from '../common/js/Helpers.js'
const getUrl = window.location.href.split('?')[0]
const shareMaskBgSrc = [sleepCard, eatCard, zhiCard, playCard, zongheCard]
const shareTitle = ["爱睡的宝宝，更聪明", "能吃的宝宝，有福气", "会学的宝宝，有出息", "会玩的宝宝，能享福", "今天宝宝表现很棒"]

class CardMask extends Component {
  constructor(props) {
    super(props);
    this.card_type = this.props.params.card_type
    const wxTitle = shareTitle[this.card_type]
    const wxLink = getUrl + '#/share/timeline/' + (this.card_type)
    const wxImgUrl = getUrl + shareLogo
    wxShareTimeline(wxTitle, wxLink, wxImgUrl)
  }
  render() {
    return (
      <div className="sharebox">
        <div className="MaskContent" style={{"backgroundImage":"url("+shareMaskBgSrc[this.card_type]+")"}}>
          <img className="kidTouxiang" src={babyTouxiang} alt=""/>
        </div>
        <p><img src={shareCore} alt=""/></p>
      </div>
    )
  }
}

export default CardMask