import React, {
  Component
} from 'react'
import '../common/css/rem.css'
import '../common/css/wap-common.css'
import '../common/js/rem.js'

import ReportTitle from './ReportTitle.js'
import ReportSubTitle from './ReportSubTitle.js'
import ReportInfor from './ReportInfor.js'
import ReportLineCharts from './ReportLineCharts.js'
import reportTitletIcon from '../common/images/report_height.png'

const categories = ['3岁', '3岁1个月', '3岁3个月', '3岁4个月', '3岁6个月', '3岁8个月', '4岁', '4岁3个月', '4岁6个月']
const weightHigherValue = [103.5, 104, 105.7, 106, 107.8, 110, 111.7, 113, 115.5]
const weightLowerValue = [88.7, 89, 90.3, 91, 91.9, 93, 94.9, 96, 97.8]
const weightTestValue = [92.3, 94, 95.6, 97, 98.0, null, null, null, null]
const testName = "身高"
class GrowHeightReport extends Component {
  render() {
    return (
      <div className="reportBox" style={{"margin":"0 0.28rem 0 0.46rem"}}>
        <ReportTitle reportTitle="生理指标评量"/>
        <ReportSubTitle reportTitletIcon={reportTitletIcon} subTitleText="生长发育水平（身高）"/>
        <ReportInfor testName={testName} result="98 cm" compareNum="&uarr; 2.4 cm"/>
        <ReportLineCharts unit="cm" testName={testName} chartTitle="身高生长发育监测图（单位：cm）" categories={categories} weightHigherValue={weightHigherValue} weightLowerValue={weightLowerValue} weightTestValue={weightTestValue}/>
      </div>
    )
  }
}

export default GrowHeightReport
