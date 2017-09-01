import React ,{ Component } from 'react'
import '../common/css/rem.css'
import '../common/css/wap-common.css'
import '../common/js/rem.js'
import ReportTitle from './ReportTitle.js'
import ReportSubTitle from './ReportSubTitle.js'
import PhysiologyWord from './PhysiologyWord.js'
import reportTitletIcon from '../common/images/report_height.png'

const PhysiologyWordBox={
  childAge:'3岁半',
  actionWord:'这时宝宝能自然协调地行走、跑、跳，基本能掌握钻、爬、攀登的动作。知道饭前便后要洗手，会正确地漱口和擦嘴。初步学会自己洗手，刷牙，能正确地用毛巾擦手',
  heartWord:'42个月的宝宝知道在上下楼梯时不能拥挤。能掌握按照物体的某一特征来进行分类。能感知出天气、季节的明显特征。能认识自己的姓名，知道自己的性别。能正确的区分正方形、长方形、圆形和三角形。'
}

export default class Physiology extends Component {
  render(){
    return (
      <div className="PhysiologyPage">
        <ReportTitle reportTitle={'生理指标评量'}/>
        <ReportSubTitle reportTitletIcon={reportTitletIcon} subTitleText={PhysiologyWordBox.childAge+'宝宝正常生理、心理发育指标'}/>
        <PhysiologyWord PhysiologyWordTitle={"动作发育"} PhysiologyWordDetail={PhysiologyWordBox.actionWord}/>
        <PhysiologyWord PhysiologyWordTitle={"心理发育"} PhysiologyWordDetail={PhysiologyWordBox.heartWord}/>
      </div>
    )
  }
}
