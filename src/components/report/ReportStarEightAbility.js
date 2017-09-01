import React, { Component } from 'react'
import { Rate , Icon } from 'antd'

export default class ReportStarEightAbility extends Component {
  render() {
    const { abilityData } = this.props
    let items = abilityData.data
    return (
      <div className="ability">
        <dl>
          {
            items.map(function(item,index){
              return (
                <dd key={index}>
                  <span className="abilityValue"><i><img src={items[index].imgSrc} alt=""/></i>{items[index].abilityName}</span>
                  <span className="abilityStar"><Rate value={items[index].abilityStar} character={<Icon type="star-o" />} count={8} /><Rate count={8} value={items[index].normStar} character={<Icon type="star-o" />} /></span>
                  <span className="percent">{items[index].proportion}%</span>
                </dd>
              )
            })
          }
        </dl>
      </div>
    )
  }
}
