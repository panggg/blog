import React,{Component} from 'react'
import  './SchemePushCard.css'

export default class SchemePushCard extends Component{
  render(){
    let {title,date,desc,imgUrl} = this.props
    return (
      <div className="pushCard">
        <div className="pushCardTitle">
          <p className="pushCardTitleTxt">{title}</p>
          <span className="pushCardTitleDate">{date}</span>
        </div>
        <div className="pushCardBody">
          <div className="pushCardBodyImg">
            <img src={imgUrl} alt=""></img>
          </div>
          <div className="pushCardBodyTxt">{desc}</div>
        </div>
      </div>
    )
  }
}
