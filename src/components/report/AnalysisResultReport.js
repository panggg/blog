import React ,{ Component } from 'react'
import './PageObservation.css'

export default class AnalysisReport extends Component {
  render(){
    const {AnalysisReportTitle,AnalysisReportContent} = this.props
    return(
      <div className="AnalysisReportObservation">
        <h2 className={'AnalysisObservationTitle AnalysisObservationTitle-'+this.props.type} >{AnalysisReportTitle}</h2>
        <div className={'AnalysisObservationContent AnalysisObservationContent-'+this.props.type}>
          {
            AnalysisReportContent.map(function(item,index){
              return (
                <p key={index}>{item}</p>
              )
            })
          }
        </div>
      </div>
    )
  }
}
