import React, {
  Component
} from 'react'
import '../common/css/rem.css'
import '../common/css/wap-common.css'
import '../common/js/rem.js'
import './ReportMain.css'
import { Popover, Icon, Spin } from 'antd'
import $ from 'jquery'
import iScroll from 'iscroll'
import ReportMainContent from './ReportMainContent'
import ReportMainFooter from './ReportMainFooter'


class ReportMain extends Component {
  constructor(props) {
    super(props)
    this.state={
      mainHeight:0,
      footerHeight:Number,
      tipVisible:false,
      currentPage:1,
      totalPage:14,
      gotoPage:0,
      contentRenderState:'block'
    }

  }
  componentDidMount() {
    const mainHeight = window.screen.height - $('.footer').height()
    this.setState({
      mainHeight: mainHeight,
      footerHeight:$('.footer').height()
    })
     let _this = this
    $('body').on('touchend','.popoverContent p',function(e){
      let indexP = $(e.target)
      indexP.css({color:'#51c2e6'}).siblings().css({color:'#000'})
      _this.refs.reportMainContent.refs.Carousel.refs.slick.slickGoTo(indexP.index()*3)
      _this.setState({tipVisible:false})
    })

    setTimeout(()=>{
      this.myScroll = new iScroll(document.querySelector('.reportMain'),
        {
          preventDefaultException: { tagName: /^(P|B|H1|H2|DIV|A|INPUT|TEXTAREA|BUTTON|SELECT)$/ },
          disableTouch:true,
          momentum:false
        })
      console.log(this.myScroll)
    },100)

  }
  handleSlideAfter = (index) =>{
    this.refs.pages.innerHTML = (index+1) + '/' + (this.refs.Carousel.props.children.length) + '页'
    this.setState({currentPage:index,tipVisible:false})
  }
  handleSlideBefore = (index) => {
    //console.log(this.refs.Carousel.props.children.length)
  }
  contentRenderState = (e) =>{
    this.setState({contentRenderState:e})
  }
  handlePopoverSlick = (e) =>{
    this.setState({tipVisible:!this.state.tipVisible})
    setTimeout(()=>{
        let childrenNodes = this.refs.reportNavTipList.childNodes
        let childrenLength = childrenNodes.length;
        for(var i = 0;i< childrenLength;i++){
          childrenNodes[i].style.color = '#000'
        }
      if(this.state.currentPage < 2){
        this.refs.reportNavTipList.childNodes[0].style.color = '#51c2e6'
      } else if (this.state.currentPage < 6) {
        this.refs.reportNavTipList.childNodes[1].style.color = '#51c2e6'
      } else {
        this.refs.reportNavTipList.childNodes[2].style.color = '#51c2e6'
      }
    }, 1)
  }
  handleMainSlick = (e) => {
    if (this.state.tipVisible === true) {
      this.setState({
        tipVisible: false
      })
    }
  }
  setCurrentPage = (e) =>{
    this.setState({currentPage:e})
  }
  getTotalPage = (e) =>{
    this.setState({totalPage:e})
  }
  goToTargetPage = (e) =>{

  }
  backToTop = (e) =>{
    console.log('to top')
    this.myScroll.scrollTo(0,0)
  }
  contentSetTipVisible = (e) =>{
    this.setState({tipVisible:e})
  }
  render() {
    const content = (
      <div ref="reportNavTipList" className="popoverContent" style={{"fontSize":"0.13rem","lineHeight":"2"}}>
        <p>生理指标评量</p>
        <p>阶段性成长评量</p>
        <p>评量结果分析</p>
      </div>
    )
    return (
      <div ref="mainDom" className="reportMain" onClick={this.handleMainSlick} style={{'height':this.state.mainHeight}}>
        <ReportMainContent ref="reportMainContent"
          mainHeight={this.state.mainHeight}
          setCurrentPage={this.setCurrentPage.bind(this)}
          getTotalPage={this.getTotalPage.bind(this)}
          goToTargetPage={this.state.gotoPage}
          contentSetTipVisible={this.contentSetTipVisible.bind(this)}
          contentRenderState={this.contentRenderState.bind(this)}
          footerHeight={this.state.footerHeight}
          backToTop={this.backToTop.bind(this)}
          />
        <Spin style={{'position':'fixed','left':'50%','top':'40%','zIndex':'99','display':this.state.contentRenderState}}/>
        <Popover
          placement="bottomLeft"
          visible={this.state.tipVisible}
          onClick={this.handlePopoverSlick}
          content={content}
          >
          <Icon type="bars" />
        </Popover>
        <ReportMainFooter  currentPage={this.state.currentPage} totalPage={this.state.totalPage} ref="Footer"/>
      </div>
    )
  }
}

export default ReportMain
