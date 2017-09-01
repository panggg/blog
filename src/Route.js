import React, { Component } from 'react'
import { Router, Route, hashHistory } from 'react-router'
import ChargeIndex from './components/evaluation/ChargeIndex'
import Charge from './components/Charge/Charge'
import Rank from './components/rank/Ranks'
import AibaoEvaluation from './components/evaluation/AibaoEvaluation'
import Statistics from './components/statistics/Statistic'
import CardExchange from './components/cardExchange/CardExchange'
import Question from './components/question/Subject'
import Report from './components/report/ReportMain'
import ShareCard from './components/share/ShareCard'
import Instructions from './components/instructions/Instructions'
import ParentShare from './components/parentshare/ParentShare'

import TabsBar from './components/evaluation/TabsBar'
import Test from './components/evaluation/test'
import ReduxIndex from './components/reduxDemo/ReduxIndex'
//import EvaluationReport from './components/evaluation/EvaluationReport'
//import SchemePush from './components/SchemePush/SchemePush'

import MyCenter from './components/myCenter/myCenter'

import App from './App'
function changeTitle(txt) {
  document.title = txt
}
//评量卡  http://wechat.aibao365.com/preview/#/evaluation/info/1   0为正常，1为扫卡
//方案卡  http://wechat.aibao365.com/preview/#/evaluation/scheme/1

const route = (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="mycenter" component={MyCenter}/>
      <Route path="app" component={App}/>
      <Route path="tabsbar" component={TabsBar}/>
      <Route path="reduxindex" component={ReduxIndex}/>
      <Route path="aibaoevaluation(/:tab)(/:type)" component={AibaoEvaluation}/>
      <Route path="test" component={Test}/>
      <Route path="instructions" component={Instructions} onEnter={changeTitle.bind(this,'使用说明')}/>
      <Route path="report" component={Report} onEnter={changeTitle.bind(this,'评量报告')}/>
      <Route path="card">
        <Route path="statistics(/:card_type)" component={Statistics} onEnter={changeTitle.bind(this,'宝卡统计')}/>
        <Route path="exchange" component={CardExchange} onEnter={changeTitle.bind(this,'宝币兑换')}/>
        <Route path="rank" component={Rank} onEnter={changeTitle.bind(this,'排行榜')}/>
      </Route>
      <Route path="charge" >
        <Route path="index" component={ChargeIndex} onEnter={changeTitle.bind(this,'缴费')}/>
        <Route path="record" component={Charge} onEnter={changeTitle.bind(this,'缴费记录')}/>
      </Route>
      <Route path="question" component={Question} onEnter={changeTitle.bind(this,'问卷评量')}/>
      <Route path="share">
        <Route path="timeline(/:card_type)" component={ShareCard} onEnter={changeTitle.bind(this,'最爱宝')}/>
        <Route path="parent" component={ParentShare} onEnter={changeTitle.bind(this,'家长分享')}/>
      </Route>
    </Route>
  </Router>
)
export default class Routers extends Component {
  render() {
    return route
  }
}