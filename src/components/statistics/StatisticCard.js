import React, {
  Component
} from 'react'
import './StatisticCard.css'


class StatisticCard extends Component {

  render() {
    const {
      imgSrc,
      titleWord
    } = this.props
    return (
      <div className="card">
        <h2 className="title">
        <img src={imgSrc} alt=""/>
            {titleWord}
        </h2>
        {this.props.children}
      </div>
    )
  }
}

export default StatisticCard