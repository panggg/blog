import React, {Component} from 'react'
import {Link} from 'react-router'
import '../common/css/rem.css'
import '../common/css/wap-common.css'
import '../common/js/rem.js'
import Question from './Question.js'
import './Question.css'
import Mask from '../mask/Mask.js'
import maskImg from '../common/images/mask_bg.png'

let subjectsOpc=[
  {
    title:"1.宝宝能否辨别白天、黑夜、昨天、今天和明天？",
    content:[
      {id:0,contentTitle:'A',contentCon:'一个也不能辨别'},
      {id:1,contentTitle:'B',contentCon:'能辨别1-2种'},
      {id:2,contentTitle:'C',contentCon:'能辨别3-4种'},
      {id:3,contentTitle:'D',contentCon:'都能辨别'}
    ]
  },
  {
    title:"2.宝宝平时更愿意和长辈一起外出活动（散步、购物，不包含去游乐场等宝宝提议和喜欢的活动）还是在家做自己喜欢的事情，比如，看电视，玩游戏等？",
    content:[
      {id:0,contentTitle:'A',contentCon:'自己玩，不参与长辈活动'},
      {id:1,contentTitle:'B',contentCon:'在成人的邀请下，勉强参与'},
      {id:2,contentTitle:'C',contentCon:'在成人的邀请下，乐意参与'},
      {id:3,contentTitle:'D',contentCon:'积极主动请求陪同'}
    ]
  },
  {
    title:"3.当家人需要安静的环境时，在提醒下，宝宝的表现是？",
    content:[
      {id:0,contentTitle:'A',contentCon:'安静不下来，继续之前的活动'},
      {id:1,contentTitle:'B',contentCon:'安静一会儿后便不再坚持'},
      {id:2,contentTitle:'C',contentCon:'能间断地保持安静'},
      {id:3,contentTitle:'D',contentCon:'能一直保持安静或主动避开'}
    ]
  },
  {
    title:"4.宝宝对于高兴、生气、悲伤、害怕等基本情绪的辨识情况符合下面哪个选项？",
    content:[
      {id:0,contentTitle:'A',contentCon:'1种及以下'},
      {id:1,contentTitle:'B',contentCon:'2种'},
      {id:2,contentTitle:'C',contentCon:'3种'},
      {id:3,contentTitle:'D',contentCon:'4种及以上'}
    ]
  },
  {
    title:"5.请回忆平时宝宝自己穿戴搭配衣服的情况，选择相应选项。",
    content:[
      {id:0,contentTitle:'A',contentCon:'穿大人安排好的衣服'},
      {id:1,contentTitle:'B',contentCon:'穿自己挑的衣服，随意搭配'},
      {id:2,contentTitle:'C',contentCon:'穿自己搭配好的衣服裤子，鞋袜随意'},
      {id:3,contentTitle:'D',contentCon:'穿自己搭配好的衣服、鞋袜还有其他装饰，有意识地打扮自己'}
    ]
  },
]

export default class Subject extends Component{
  constructor(props){
    super(props)
    this.state={
      visible:false
    }
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
  render(){
    return(
      <div className="subjectBox">
        <Question subjectsOpc={subjectsOpc}/>
          <div className="nextStep jump" onClick={this.showMask}>下一步</div>
        <Link to="/evaluation/info">
          <Mask visible={this.state.visible} handleClick={this.handleClick} maskImg={maskImg} btnText="确定">
            <p>恭喜你</p>
            <p>您已完成测评！！！</p>
          </Mask>
        </Link>

      </div>
    )
  }
}
