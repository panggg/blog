import React, { Component } from 'react'
import './ClassRank.css'

export default class ClassRank extends Component {
  render() {
    const { items } = this.props
    return (
      <div className="classRank">
        <ul className="rankListBox">
        {
          items.map(function(item,index) {
            return (
              <li className="clearfix" key={index}>
                <p className="rankNum"><span>{item.rank}</span></p>
                <div className="babyName clearfix">
                  <img src={item.bg} role="presentation"/>
                  <span>{item.name}</span>
                </div>
                <p className="rankTotal">{item.score}</p>
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}
