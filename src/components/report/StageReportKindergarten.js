import React, {
  Component
} from 'react'
import '../common/css/rem.css'
import '../common/css/wap-common.css'
import '../common/js/rem.js'

import './ReportChartTip.css'
import ReportTitle from './ReportTitle.js'
import ReportSubTitle from './ReportSubTitle.js'
import ReportBarCharts from './ReportBarCharts.js'
import ReportChartTip from './ReportChartTip.js'
import reportTitletIcon from '../common/images/report_seat.png'

const categories = ['null', '自我认知', '语言', '数理逻辑', '音乐', '视觉空间', '自然观察', '运动', '人际交往']
const chartData = [null, 10, 38, 42, 66, 62, 82, 22, 86]
  /*图表提示文字*/
const titleWord = '本图表示在本次儿童阶段性发展评量中，宝宝和本园同年龄段的宝宝相比，各个智能的相对发展状况。柱图中的柱表示宝宝相对应的能力在此次评量中的结果在本园同年龄段的宝宝中的占位。柱图中的柱越高，表示相对应的能力在本园同年龄段的宝宝中的占位越高，同时，也代表相对应的能力发展的越好。'

class StageReportkindergarten extends Component {
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
      <div className="reportBox" style={{"margin":"0 0.28rem 0 0.46rem"}}  onClick={this.handleClick}>
        <ReportTitle  reportTitle="阶段性成长评量"/>
        <ReportSubTitle reportTitletIcon={reportTitletIcon} subTitleText="阶段性成长评量全园占位"/>
        <ReportBarCharts chartTitle="阶段性成长评量全园占位图（单位：%）" categories={categories} chartData={chartData}>
          <ReportChartTip ref="ReportTip" titleWord={titleWord}  visible={this.state.isDisplay}/>
        </ReportBarCharts>
      </div>
    )
  }
}

export default StageReportkindergarten
