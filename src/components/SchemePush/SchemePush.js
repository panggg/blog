import React from 'react'
import './SchemePush.css'
import SchemePushCard from './components/SchemePushCard/SchemePushCard'
import SchemePushTip from './components/SchemePushTip/SchemePushTip'
import SchemeImg_1 from '../common/images/scheme_img1.png'
import SchemeImg_2 from '../common/images/scheme_img2.png'
import SchemeImg_3 from '../common/images/scheme_img3.png'
import SchemeImg_4 from '../common/images/scheme_img4.png'

export default class SchemePush extends React.Component{
  state = {
    visible: true
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
    let data = [
      {
        title:'自我认知智能：宝宝学穿搭',
        date:'2017-03-25',
        imgUrl:SchemeImg_1,
        desc:'当宝宝穿上自己喜欢的衣服，都会不由自主地说：“我的衣服真漂亮。”',
        link:'http://jzb924.ibaobest.com/jzb1130/index.php/Home/Index/fangAnShow/id/1905'
      },
      {
        title:'数理逻辑智能：搭火车',
        date:'2017-03-25',
        imgUrl:SchemeImg_2,
        desc:'学会按照一定规律进行排序是孩子学习数学的基础，也是开启孩子智慧的一个重要方法。',
        link:'http://jzb924.ibaobest.com/jzb1130/index.php/Home/Index/fangAnShow/id/1906'
      },
      {
        title:'语言智能：《碰一碰》',
        date:'2017-03-25',
        imgUrl:SchemeImg_3,
        desc:'一般宝宝在听到好听的音乐时，会兴奋不已，特别是能够一边玩一边唱的小儿歌。',
        link:'http://jzb924.ibaobest.com/jzb1130/index.php/Home/Index/fangAnShow/id/1909'
      },
      {
        title:'身体运动智能：会游动的剪纸鱼',
        date:'2017-03-25',
        imgUrl:SchemeImg_4,
        desc:'儿童手工不但简单易学，而且设计十分精巧。像下面的这个剪纸的小鱼，是可以拿在手里动来动去的哟！',
        link:'http://jzb924.ibaobest.com/jzb1130/index.php/Home/Index/fangAnShow/id/1950'
      }
      ]
      let pushCards = data.map((el,index) =>{
        return(
          <a key={index} href={el.link}>
            <SchemePushCard title={el.title} date={el.date} imgUrl={el.imgUrl} desc={el.desc}/>
          </a>
          )
      })
    return (
      <div className="schemePush">
        <SchemePushTip/>
        {pushCards}
      </div>
    )
  }
}
