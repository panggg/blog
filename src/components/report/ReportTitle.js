import React, {
  Component
} from 'react'
import './ReportTitle.css'

class ReportTitle extends Component {
  render() {
    const {
      reportTitle
    } = this.props
    return (
      <h2>{reportTitle}</h2>
    )
  }
}

export default ReportTitle
