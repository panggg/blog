import React, {
  Component
} from 'react'
/*import $ from 'jquery'*/
import './StatisticChart.css'


class StatisticChart extends Component {
  render() {
    const {
      cardData,
      colorList
    } = this.props
    let allCount = [0, 0, 0, 0, 0, 0, 0] //default cards
    for (let j = 0; j < cardData[0].data.length; j++) { //get every cardNum
      for (let i = 0; i < cardData.length; i++) {
        allCount[j] += cardData[i].data[j].count
      }
    }
    let maxCardNum = Math.max.apply(null, allCount) //get maxNum of cards
    return (
      <ul className="chartBox">
        {
          cardData[0].data.map(function(item,index){
          let itemColor = colorList[index]
          let itemHeight=parseFloat(allCount[index],10)*55/maxCardNum  //get maxheight of chart
            return (
              <li key={index}>
                <div className="chart">
                  <div className="item" style={{backgroundColor:itemColor,height:itemHeight}}>
                    <p className="score"><span>{allCount[index]}</span></p>
                  </div>
                </div>
                <p className="text">{item.text}</p>
              </li>
              )
          })
        }
      </ul>
    )
  }
}

export default StatisticChart