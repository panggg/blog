import React, { Component } from 'react'
import './ClassRank.css'

class ClassRankTitle extends Component {
   render() {
      return(
        <div>
          <div className="rankList">
            <span>名次</span>
            <span>姓名</span>
            <span>宝卡数量</span>
          </div>
          {this.props.children}
        </div>
      )
   }
}

export default ClassRankTitle
