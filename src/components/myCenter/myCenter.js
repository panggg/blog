import React, { Component } from 'react'
import { Tabs } from 'antd-mobile'
import './changeList.css'
import defaultAvatar from '../common/images/baby.png'

const TabPane = Tabs.TabPane;


export default class MyCenter extends Component {
  constructor(props) {
    super(props)
    this.handleKidClick = this.handleKidClick.bind(this)
  }
  handleKidClick(index) {
    console.log(index)
  }
  render() {
    return (
      <div className="aaa">
        <div className="bbb"></div>
        <div className="change-kid-list">
          <Tabs defaultActiveKey="0" pageSize={15}>
            <TabPane
              tab={
                <div className="change-kid-list-content" onClick={() => this.handleKidClick}>
                  <img src={defaultAvatar} alt=""/>
                  <p>name</p>
                  <p>aklsjklajs</p>
                </div>
              }
              key={0}
            >
            </TabPane>
            <TabPane
              tab={
                <div className="change-kid-list-content" onClick={() => this.handleKidClick}>
                  <img src={defaultAvatar} alt=""/>
                  <p>name</p>
                  <p>aklsjklajs</p>
                </div>
              }
              key={1}
            >
            </TabPane>
            <TabPane
              tab={
                <div className="change-kid-list-content" onClick={() => this.handleKidClick}>
                  <img src={defaultAvatar} alt=""/>
                  <p>name</p>
                  <p>aklsjklajs</p>
                </div>
              }
              key={2}
            >
            </TabPane>
            <TabPane
              tab={
                <div className="change-kid-list-content" onClick={() => this.handleKidClick}>
                  <img src={defaultAvatar} alt=""/>
                  <p>name</p>
                  <p>aklsjklajs</p>
                </div>
              }
              key={3}
            >
            </TabPane>
            <TabPane
              tab={
                <div className="change-kid-list-content" onClick={() => this.handleKidClick}>
                  <img src={defaultAvatar} alt=""/>
                  <p>name</p>
                  <p>aklsjklajs</p>
                </div>
              }
              key={4}
            >
            </TabPane>
            <TabPane
              tab={
                <div className="change-kid-list-content" onClick={() => this.handleKidClick}>
                  <img src={defaultAvatar} alt=""/>
                  <p>name</p>
                  <p>aklsjklajs</p>
                </div>
              }
              key={5}
            >
            </TabPane>
            <TabPane
              tab={
                <div className="change-kid-list-content" onClick={() => this.handleKidClick}>
                  <img src={defaultAvatar} alt=""/>
                  <p>name</p>
                  <p>aklsjklajs</p>
                </div>
              }
              key={6}
            >
            </TabPane>
            <TabPane
              tab={
                <div className="change-kid-list-content" onClick={() => this.handleKidClick}>
                  <img src={defaultAvatar} alt=""/>
                  <p>name</p>
                  <p>aklsjklajs</p>
                </div>
              }
              key={7}
            >
            </TabPane>
            <TabPane
              tab={
                <div className="change-kid-list-content" onClick={() => this.handleKidClick}>
                  <img src={defaultAvatar} alt=""/>
                  <p>name</p>
                  <p>aklsjklajs</p>
                </div>
              }
              key={8}
            >
            </TabPane>
            <TabPane
              tab={
                <div className="change-kid-list-content" onClick={() => this.handleKidClick}>
                  <img src={defaultAvatar} alt=""/>
                  <p>name</p>
                  <p>aklsjklajs</p>
                </div>
              }
              key={9}
            >
            </TabPane>
            <TabPane
              tab={
                <div className="change-kid-list-content" onClick={() => this.handleKidClick}>
                  <img src={defaultAvatar} alt=""/>
                  <p>name</p>
                  <p>aklsjklajs</p>
                </div>
              }
              key={10}
            >
            </TabPane>
            <TabPane
              tab={
                <div className="change-kid-list-content" onClick={() => this.handleKidClick}>
                  <img src={defaultAvatar} alt=""/>
                  <p>name</p>
                  <p>aklsjklajs</p>
                </div>
              }
              key={11}
            >
            </TabPane>
            <TabPane
              tab={
                <div className="change-kid-list-content" onClick={() => this.handleKidClick}>
                  <img src={defaultAvatar} alt=""/>
                  <p>name</p>
                  <p>aklsjklajs</p>
                </div>
              }
              key={12}
            >
            </TabPane>
            <TabPane
              tab={
                <div className="change-kid-list-content" onClick={() => this.handleKidClick}>
                  <img src={defaultAvatar} alt=""/>
                  <p>name</p>
                  <p>aklsjklajs</p>
                </div>
              }
              key={13}
            >
            </TabPane>
            
          </Tabs>
        </div>
      </div>
      
    )
  }
}
