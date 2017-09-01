import React, {
  Component
} from 'react'
import '../common/css/rem.css'
import '../common/css/wap-common.css'
import './StageReportKid.css'
import '../common/js/rem.js'
import ReportTitle from './ReportTitle.js'
import ReportSubTitle from './ReportSubTitle.js'
import StageReportKidAbility from './StageReportKidAbility.js'
import ReportChartTip from './ReportChartTip.js'
import StageReportKidHighchart from './StageReportKidHighchart.js'
import reportTitletIcon from '../common/images/report_leida.png'
import report_renzhi from '../common/images/report_renzhi.png'
import report_yuyan from '../common/images/report_yuyan.png'
import report_dayundong from '../common/images/report_dayundong.png'
import report_shejiao from '../common/images/report_shejiao.png'
import report_yishu from '../common/images/report_yishu.png'
import report_jingxi from '../common/images/report_jingxi.png'
import report_zili from '../common/images/report_zili.png'
import report_shuxue from '../common/images/report_shuxue.png'

import report_renzhihui from '../common/images/report_renzhihui.png'
import report_yuyanhui from '../common/images/report_yuyanhui.png'
import report_dayundonghui from '../common/images/report_dayundonghui.png'
import report_shejiaohui from '../common/images/report_shejiaohui.png'
import report_jingxihui from '../common/images/report_jingxihui.png'
import report_zilihui from '../common/images/report_zilihui.png'
import report_shuxuehui from '../common/images/report_shuxuehui.png'
import report_yishuhui from '../common/images/report_yishuhui.png'


/*图标的数据*/
const ReportGrowHighchart = [4, 4, 3, 6, 6, 7, 7, 2]
  /*优秀能力和图片*/
const aBility = {
    childName: '王子轩',
    goodAbility: [{
      name: '人际交往',
      id: 5
    }, {
      name: '自然观察',
      id: 6
    }],
    badAbility: [{
      name: '自我认知',
      id: 7
    }]
  }
  /*本地图片存入数组中*/
const goodAbilityImg = [report_yuyan, report_shuxue, report_dayundong, report_zili, report_yishu, report_shejiao, report_jingxi, report_renzhi]
const badAbilityImg = [report_yuyanhui, report_shuxuehui, report_dayundonghui, report_zilihui, report_yishuhui, report_shejiaohui, report_jingxihui, report_renzhihui]

/*图表提示文字--这个是固定的*/
const titleWord = '本图表示在本次儿童阶段性发展评量中,宝宝自己和自己比,各个能力的发展状况。蓝色线表示宝宝的评量结果。蓝色线与指向中心的线段的交点越靠外环，表示这条线段指向的能力发展的越好。'
export default class StageReportKid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDisplay: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick = (e) => {
    e.nativeEvent.stopImmediatePropagation()
    if (this.refs.ReportTip.state.isShow === true) {
      this.refs.ReportTip.setState({
        isShow: !this.refs.ReportTip.state.isShow
      })
    }
  }
  render() {
    return (
      <div className="StageReportKidPage" onClick={this.handleClick}>
        <ReportTitle reportTitle={'阶段性成长评量'}/>
        <ReportSubTitle reportTitletIcon={reportTitletIcon} subTitleText={aBility.childName+'儿童阶段性成长评量雷达图'}/>
        <StageReportKidHighchart ReportGrowHighchart={ReportGrowHighchart} >
          <ReportChartTip ref="ReportTip" titleWord={titleWord} visible={this.state.isDisplay}/>
        </StageReportKidHighchart>
        <StageReportKidAbility abilityText={"优秀能力:"} abilityBox={aBility.goodAbility} abilityImg={goodAbilityImg} className={"goodAbilityWord"}/>
        <StageReportKidAbility abilityText={"较弱能力:"} abilityBox={aBility.badAbility} abilityImg={badAbilityImg} className={"badAbilityWord"}/>
      </div>
    )
  }
}
