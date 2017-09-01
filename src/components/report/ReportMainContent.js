import React, { Component } from 'react'
import { Carousel } from 'antd'
import $ from 'jquery'
import GrowHeightReport from './GrowHeightReport'
import GrowWeightReport from './GrowWeightReport'
import StateReportStar from './StateReportStar'
import StageReportkindergarten from './StageReportKindergarten'
import Physiology from './Physiology'
import StageReportKid from './StageReportKid'
import PageObservation from './PageObservation'


export default class ReportMainContent extends Component{
  constructor(props) {
    super(props);
    this.state={
      mainHeight:this.props.mainHeight
    }
  }
  componentWillMount(){
    this.props.contentRenderState('block')
  }
  componentDidMount(){
    this.props.contentRenderState('none')
    this.props.getTotalPage(this.refs.Carousel.props.children.length)
    //rewrite swipe
    let _this = this
    let originX = 0
    $('.reportContent').on('touchstart',function(e){
      let touch = e.originalEvent.targetTouches[0]
      originX = touch.pageX
    })
    $('.reportContent').on('touchend',function(e){
      let endX = e.originalEvent.changedTouches[0].pageX
      let distanceX = endX-originX
      if(Math.abs(distanceX) > 50){
        if(distanceX > 0 ){
          _this.refs.Carousel.refs.slick.slickPrev()
        }else{
          _this.refs.Carousel.refs.slick.slickNext()
        }
      }
    })
  }
  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.mainHeight === this.state.mainHeight){
      return false
    }else{
      this.setState({mainHeight:this.props.mainHeight})
    }
      return true
  }
  handleSlideAfter = (e) =>{
    this.props.contentSetTipVisible(false)
    this.props.backToTop()
  }
  handleSlideBefore = (beforeIndex,afterIndex) =>{
    this.props.setCurrentPage(afterIndex+1)
  }
  render(){
    return(
        <div className="reportContent" style={{paddingBottom:0}} onClick={this.handleSlick}>
          <Carousel
            ref="Carousel"
            dots={false}
            style={{height:this.mainHeight}}
            beforeChange={this.handleSlideBefore}
            afterChange={this.handleSlideAfter}
            infinite={false}
            touchMove={false}
            speed={100}
            swipe={false}
            >
            <div>
              <GrowHeightReport />
            </div>
            <div>
              <GrowWeightReport />
            </div>
            <div>
              <Physiology />
            </div>
            <div>
              <StateReportStar />
            </div>
            <div>
              <StageReportKid />
            </div>
            <div>
              <StageReportkindergarten />
            </div>
            <div>
              <PageObservation type={7}/>
            </div>
            <div>
              <PageObservation type={0}/>
            </div>
            <div>
              <PageObservation type={1}/>
            </div>
            <div>
              <PageObservation type={4}/>
            </div>
            <div>
              <PageObservation type={3}/>
            </div>
            <div>
              <PageObservation type={6}/>
            </div>
            <div>
              <PageObservation type={2}/>
            </div>
            <div>
              <PageObservation type={5}/>
            </div>
            </Carousel>
            <div className="emptyDom" style={{'height':'1rem'}}>
            </div>
        </div>
      )
  }
}
