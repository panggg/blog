import React, {
  Component
} from 'react'
import '../common/css/rem.css'
import '../common/css/wap-common.css'
import '../common/js/rem.js'
import StatisticCard from './StatisticCard.js'
import StatisticChart from './StatisticChart.js'
import StatisticTimeline from './StatisticTimeline.js'
import CardMask from '../mask/CardMask'
import titleIcon1 from '../common/images/statistic_icon1.png'
import titleIcon2 from '../common/images/statistic_icon2.png'
import sleepIcon from '../common/images/statistic_sleep.png'
import eatIcon from '../common/images/statistic_eat.png'
import bookIcon from '../common/images/statistic_book.png'
import playIcon from '../common/images/statistic_play.png'
import allIcon from '../common/images/statistic_all.png'
import testIcon from '../common/images/statistic_test.png'
import schemIcon from '../common/images/statistic_schem.png'
import shareLogo from '../common/images/logo.jpg'
import {
  wxShareTimeline
} from '../common/js/Helpers.js'
const colorList = ["#FDBF30", "#67C9F8", "#92CF68", "#F4D540", "#ED7AA1", "#B799C6", "#FA7475"]
const cardData = [{
  "datetime": "2017-02-03",
  "data": [{
    "id": 1,
    "text": "睡",
    "icon": sleepIcon,
    "count": 6
  }, {
    "id": 2,
    "text": "吃",
    "icon": eatIcon,
    "count": 6
  }, {
    "id": 3,
    "text": "智",
    "icon": bookIcon,
    "count": 7
  }, {
    "id": 4,
    "text": "玩",
    "icon": playIcon,
    "count": 3
  }, {
    "id": 5,
    "text": "综合",
    "icon": allIcon,
    "count": 4
  }, {
    "id": 6,
    "text": "评量",
    "icon": testIcon,
    "count": 10
  }, {
    "id": 7,
    "text": "方案",
    "icon": schemIcon,
    "count": 3
  }, ]
}, {
  "datetime": "2017-01-27",
  "data": [{
    "id": 1,
    "text": "睡",
    "icon": sleepIcon,
    "count": 4
  }, {
    "id": 2,
    "text": "吃",
    "icon": eatIcon,
    "count": 4
  }, {
    "id": 3,
    "text": "智",
    "icon": bookIcon,
    "count": 3
  }, {
    "id": 4,
    "text": "玩",
    "icon": playIcon,
    "count": 3
  }, {
    "id": 5,
    "text": "综合",
    "icon": allIcon,
    "count": 3
  }, {
    "id": 6,
    "text": "评量",
    "icon": testIcon,
    "count": 3
  }, {
    "id": 7,
    "text": "方案",
    "icon": schemIcon,
    "count": 3
  }, ]
}, {
  "datetime": "2017-01-20",
  "data": [{
    "id": 1,
    "text": "睡",
    "icon": sleepIcon,
    "count": 2
  }, {
    "id": 2,
    "text": "吃",
    "icon": eatIcon,
    "count": 4
  }, {
    "id": 3,
    "text": "智",
    "icon": bookIcon,
    "count": 3
  }, {
    "id": 4,
    "text": "玩",
    "icon": playIcon,
    "count": 4
  }, {
    "id": 5,
    "text": "综合",
    "icon": allIcon,
    "count": 3
  }, {
    "id": 6,
    "text": "评量",
    "icon": testIcon,
    "count": 1
  }, {
    "id": 7,
    "text": "方案",
    "icon": schemIcon,
    "count": 3
  }, ]
}]
const shareTitle = ["爱睡的宝宝，更聪明", "能吃的宝宝，有福气", "会学的宝宝，有出息", "会玩的宝宝，能享福", "今天宝宝表现很棒"]
const cardDataS = JSON.stringify(cardData)
const storage = window.localStorage
storage.setItem("cardData", cardDataS)
let getDATA = JSON.parse(storage.getItem("cardData"))
const getUrl = window.location.href.split('#')[0]


class Statistic extends Component {
  constructor(props) {
    super(props)
    this.card_type = this.props.params.card_type
    this.isSao = this.props.params.card_type
    if (this.isSao != null && this.isSao.toString().length > 0) {
      getDATA[0].data[this.card_type - 1].count += 1
      const wxTitle = shareTitle[this.card_type - 1]
      const wxLink = getUrl + '#/share/timeline/' + (this.card_type - 1) + '/' + shareLogo
      const wxImgUrl = getUrl + shareLogo
      wxShareTimeline(wxTitle, wxLink, wxImgUrl, this.handleClick, this.handleClick)
      this.state = {
        visible: true
      }
    } else {
      this.state = {
        visible: false
      }
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
        <StatisticCard  imgSrc={titleIcon1} titleWord="学期累计卡片" >
          <StatisticChart cardData={getDATA} colorList={colorList}/>
        </StatisticCard>
        <StatisticCard imgSrc={titleIcon2} titleWord="每周累计卡片">
          <StatisticTimeline cardData={getDATA} cardType={this.card_type-1} colorList={colorList} />
        </StatisticCard>
        <CardMask visible={this.state.visible} shareTitle={shareTitle} cardType={this.card_type-1} handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default Statistic;
