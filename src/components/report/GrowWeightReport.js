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
import reportTitletIcon from '../common/images/report_weight.png'

const categories = ['92cm', '93.5cm', '95cm', '96.5cm', '98cm', '99.5cm', '101cm', '102.5cm', '104cm']
const weightHigherValue = [15.6, 16.1, 16.4, 16.8, 17.2, 17.8, 18.0, 18.5, 18.9]
const weightLowerValue = [11.3, 11.8, 12.1, 12.5, 12.8, 13.1, 13.5, 13.8, 14.1]
const weightTestValue = [12.4, 13.0, 13.8, 14.8, 16.0, null, null, null, null]
const testName = "体重"
class GrowWeightReport extends Component {
  render() {
    return (
      <div className="reportBox" style={{"margin":"0 0.28rem 0 0.46rem"}}>
        <ReportTitle  reportTitle="生理指标评量"/>
        <ReportSubTitle reportTitletIcon={reportTitletIcon} subTitleText="生长发育水平（体重）"/>
        <ReportInfor testName={testName} result="16 kg" compareNum="&uarr; 2.2 kg"/>
        <ReportLineCharts unit="kg" testName={testName} chartTitle="体重生长发育监测图（单位：kg）" categories={categories} weightHigherValue={weightHigherValue} weightLowerValue={weightLowerValue} weightTestValue={weightTestValue}/>
      </div>
    )
  }
}

export default GrowWeightReport
