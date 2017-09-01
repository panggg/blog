import React from 'react'
import './charge.css'

export default class Charge extends React.Component{
  render(){
    let recordData = [
      {date:'2017-03-03',charge:'20000元'},
      {date:'2017-03-02',charge:'80000元'},
      {date:'2017-03-01',charge:'60000元'},
      {date:'2017-02-28',charge:'10000元'},
      {date:'2017-02-27',charge:'1000元'},
      {date:'2017-02-26',charge:'30000元'},
      {date:'2017-02-25',charge:'50000元'},
      {date:'2017-02-24',charge:'10000元'}
    ]
    let chargeRecord = recordData.map((el,index) => {
      return(
         <div className="item" key={index}>
          <div className="item-l">
            <p>{el.date}</p>
          </div>
          <div className="item-r">
            <p>{el.charge}</p>
          </div>
         </div>
         )
    })
    console.log(chargeRecord)
    return(
      <div className="charge timeline">
        {chargeRecord}
    </div>
    )
  }
}
