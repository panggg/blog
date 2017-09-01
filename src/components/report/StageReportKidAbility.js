import React ,{ Component } from 'react'
import './StageReportKid.css'


export default class StageReportKidAbility extends Component {
  render(){
    const {abilityText,abilityBox,abilityImg,className} = this.props
    return(
      <div className="abilityBox">
        <p className="abilityLeft">{abilityText}</p>
        <div className="abilityRight">
          <div className={className}>
            {
              abilityBox.map(function(item,index){
                return(
                  <span key={index}>{item.name}</span>
                )
              })
            }
          </div>
          <ul className="abilityImgs">
            {
              abilityBox.map(function(item,index){
                return(
                  <li key={index}><img src={abilityImg[item.id]} role="presentation"/></li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
