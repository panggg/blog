import React, {
  Component
} from 'react'
import './StatisticTimeline.css'



class StatisticTimeline extends Component {
  componentDidMount() {
    //alert(this.refs.ulBox)
    //console.log(this.refs.timeParent.childNodes[0])
    this.refs.timeParent.childNodes[0].getElementsByTagName('ul')[0].childNodes[this.props.cardType].getElementsByTagName('i')[0].style.display = "flex"
  }
  render() {
    const {
      cardData,
      colorList
    } = this.props
    return (
      <div ref="timeParent" className="timeLineBox">
      {
      cardData.map(function(item, index) {
        let nth=index%7;
        let cardColor=colorList[nth]
        let datetime=item.datetime.substring(5,10)
        return (
            <div key={index} className="clearfix">
              <div className="leftTime">{datetime}</div>
              <div className="rightList">
                <span className="circle" style={{backgroundColor:cardColor}}></span>
                <ul className="clearfix">
                {
                  item.data.map(function(dataItem,dataIndex){
                    return(
                        <li key={dataIndex}><span className="cardName">{dataItem.text}：</span><img src={dataItem.icon} alt=""/><p className="cardNum">&nbsp; x <span>{dataItem.count}</span><i>+1</i></p></li>
                      )
                  })
                }
                </ul>
                <p className="bottomLine"></p>
              </div>
            </div>
        )
      })
      }
      </div>


    )
  }
}
export default StatisticTimeline;
