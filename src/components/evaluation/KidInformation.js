import React from 'react';
import { Component } from 'react'
import {Link} from 'react-router'
import UploadPicture from './UploadPicture'
import './KidInformation.css'
import baby from '../common/images/baby_img.png'
import boy from '../common/images/sex_boy.png'
import girl from '../common/images/sex_girl.png'

class KidInformation extends Component {
  constructor(props){
    super(props)
    this.state={
      isShowUploadPicture:false,
      kidImgSrc:baby
    }
    this.onClickKidImg = this.onClickKidImg.bind(this)
    this.closeUploadPicture = this.closeUploadPicture.bind(this)
    this.callbackcropResult = this.callbackcropResult.bind(this)
  }
  onClickKidImg (){
    this.setState({
      isShowUploadPicture:false
    })
  }
  closeUploadPicture(){
    this.setState({
      isShowUploadPicture: false
    })
  }
  callbackcropResult(cropResult){
    this.setState({
      kidImgSrc:cropResult
    })
  }
  render() {
    const { KidInfor } = this.props
    const year = parseInt(KidInfor.age/12,10)
    const month = KidInfor.age%12
    const kidImgSrc = this.state.kidImgSrc
    return (
      <div className="wraps">
        <div className="logo"></div>
        <div className="babyImg" onClick={this.onClickKidImg}>
          <img src={kidImgSrc?kidImgSrc:KidInfor.imgSrc} alt=""/>
        </div>
        <div className="babyName clearfix">
          <span>{KidInfor.name}<span className="sexImg"><img src={KidInfor.sex==='男'?boy:girl} alt=""/></span></span>
        </div>
        <p className="help-tit clearfix">帮孩子成为最好的自己</p>
        <div className="title">儿童阶段性成长评量报告</div>
        <table>
          <tbody>
            <tr><td>评量日期：</td><td>{KidInfor.evaluationData}</td></tr>
            <tr><td>主任老师：</td><td>{KidInfor.teacher}</td></tr>
            <tr><td>编号：</td><td>{KidInfor.numbers}</td></tr>
            <tr><td>出生日期：</td><td>{KidInfor.birthday}</td></tr>
            <tr><td>十足年龄：</td><td>{year}岁{month}月</td></tr>
          </tbody>
        </table>
        <div className="linkReport"><Link to='report'> 查看评量报告</Link></div>
        <UploadPicture callbackcropResult={this.callbackcropResult} isShowUploadPicture={this.state.isShowUploadPicture} closeUploadPicture={this.closeUploadPicture} />
      </div>
    )
  }
}

export default KidInformation
