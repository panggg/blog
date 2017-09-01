import React, {
  Component
} from 'react'
import './ReportInfor.css'

class ReportInfor extends Component {
  render() {
    const {
      testName,
      result,
      compareNum
    } = this.props
    return (
      <ul className="reportInfor clearfix">
        <li>
          <p>{testName}</p>
          <h3>{result}</h3>
        </li>
        <li>
          <p>较上次评量</p>
          <h3>{compareNum}</h3>
        </li>
      </ul>
    )
  }
}

export default ReportInfor
