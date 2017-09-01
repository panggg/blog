import React, { Component } from 'react'

export default class ReportMainFooter extends Component{
  constructor(props) {
    super(props);
    this.state={
      currentPage:this.props.currentPage,
      totalPage:this.props.totalPage
    }
  }
  shouldComponentUpdate(nextProps,nextState){
    if(this.props.totalPage === 0){
      return true
    }
    if(nextProps.currentPage === this.props.currentPage){
      return false
    }
      return true
  }
  render(){
    return (
        <div className="footer" ref="Footer">
          <span ref="pages">{this.props.currentPage}/{this.props.totalPage}页</span>
          <span className="leftSlide">向左滑</span>
        </div>
    )
  }
}
