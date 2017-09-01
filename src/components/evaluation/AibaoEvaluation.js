import React from 'react'
import { Component } from 'react'
import './AibaoEvaluation.css'
import '../common/css/rem.css'
import '../common/css/wap-common.css'
import '../common/js/rem'
import { TabBar } from 'antd-mobile';
import KidInformation from './KidInformation'
import SchemePush from '../SchemePush/SchemePush'

const KidInfor = {
  "name":"王子轩",
  "sex":'男',
  "imgSrc":"",
  "evaluationData":"2017-09-08",
  "teacher":"彭丽",
  "numbers":"001",
  "birthday":"2013-09-08",
  "age":"42"
}


class AibaoEvaluation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: (this.props.params.tab ? this.props.params.tab : "info"),
      hidden: false
    }
  }
  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%'}}>
        {pageText}
      </div>
    );
  }
  render() {
    let selectedTab = this.props.params.tab ? this.props.params.tab : "info"
    console.log(selectedTab)
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          title="评量报告"
          key="info"
          icon={<div style={{ }}/>}
          selectedIcon={<div style={{}}/>}
          selected={selectedTab === 'info'}
          onPress={() => {
            
            this.props.router.push("/aibaoevaluation/info")
          }}
        >
          {this.renderContent(<KidInformation KidInfor={KidInfor} />)}
        </TabBar.Item>
        <TabBar.Item
          icon={<div style={{ }}/>}
          selectedIcon={<div style={{}}/>}
          title="方案"
          key="scheme"
          selected={selectedTab === 'scheme'}
          onPress={() => {
            
            this.props.router.push("/aibaoevaluation/scheme")
          }}
        >
          {this.renderContent(<SchemePush/>)}
        </TabBar.Item>
      </TabBar>
    );
  }
}

export default AibaoEvaluation
