import React, {
  Component
} from 'react'
import './ReportSubTitle.css'

class ReportSubTitle extends Component {
  render() {
    const {
      reportTitletIcon,
      subTitleText
    } = this.props
    return (
      <div className="subTitle">
        <img src={reportTitletIcon} alt=""/>{subTitleText}
      </div>
    )
  }
}

export default ReportSubTitle
