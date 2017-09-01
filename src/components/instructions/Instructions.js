import React, { Component } from 'react'
import instructions_1 from '../common/images/instructions_1.png'
import instructions_2 from '../common/images/instructions_2.png'
import instructions_3 from '../common/images/instructions_3.png'
import instructions_4 from '../common/images/instructions_4.png'
import instructions_5 from '../common/images/instructions_5.png'
import instructions_6 from '../common/images/instructions_6.png'
import instructions_7 from '../common/images/instructions_7.png'
import instructions_8 from '../common/images/instructions_8.png'
import instructions_9 from '../common/images/instructions_9.png'
import instructions_10 from '../common/images/instructions_10.png'
import instructions_11 from '../common/images/instructions_11.png'
import instructions_12 from '../common/images/instructions_12.png'
import instructions_13 from '../common/images/instructions_13.png'

export default class Instructions extends Component{
  render(){
    const instructionsImgs = [
      instructions_1,
      instructions_2,
      instructions_3,
      instructions_4,
      instructions_5,
      instructions_6,
      instructions_7,
      instructions_8,
      instructions_9,
      instructions_10,
      instructions_11,
      instructions_12,
      instructions_13
    ]
    return (
      <div>
        <p style={{fontSize:'0.18rem',color:'#000',fontWeight:'bold',padding:'0.1rem 0 0 0.15rem'}}>最爱宝一一使用说明</p>
        <div style={{fontSize:'0.12rem',padding:'0.05rem 0 0.1rem 0.16rem'}}><span style={{color:'#ccc'}}>2016-11-14</span><span style={{color:'#5B7EA1',padding:'0 0.1rem'}}>最爱宝</span><span style={{color:'#ccc'}}>阅读&nbsp;1123</span></div>
        {
          instructionsImgs.map(function(item,index){
            return (
              <img key={index} src={instructionsImgs[index]} alt="" style={{display:'block',width:'100%'}} />
            )
          })
        }
        <div style={{fontSize:'0.13rem',color:'#000',padding:'0 0 0.2rem 0.14rem',lineHeight:'1.5'}}>
          <p>北京艾的教育科技股份有限公司</p>
          <p>公众号:最爱宝</p>
          <p>联系电话:010-82023003</p>
        </div>
      </div>
    )
  }
}
