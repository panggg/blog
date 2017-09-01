import React, { Component } from 'react'
import share from '../common/images/share.png'

export default class ParentShare extends Component{
  render(){
    const styles = {
      position: 'absolute',
      top: '0',
      width: '100%',
      height: '100%',
      background: '#F5F5F5'
    }
    return (
      <div style={styles}>
        <img src={share} alt="" style={{display:'block',width:'100%'}} />
      </div>
    )
  }
}
