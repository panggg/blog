import React from 'react'
import { Component } from 'react'
import KidInformation from './KidInformation'
import TabsBar from './TabsBar'
import './AibaoEvaluation.css'
import '../common/css/rem.css'
import '../common/css/wap-common.css'
import '../common/js/rem'


const KidInfor = {
  "name":"王子轩",
  "sex":'男',
  "imgSrc":"",
  "evaluationData":"2017-09-08",
  "teacher":"彭丽",
  "numbers":"001",
  "birthday":"2013-09-08",
  "age":"42"
}
class EvaluationReport extends Component {
  render() {
    return (
      <div>
        <KidInformation KidInfor={KidInfor} />
        <TabsBar propsIndex={0}/>
      </div>
    )
  }
}

export default EvaluationReport
