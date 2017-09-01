import React, { Component } from 'react'
import { Tabs } from 'antd-mobile';
import './test.css'

const TabPane = Tabs.TabPane

class TabsBar extends Component {
  handleClick = (name) => {
    this.props.callback(name)
  }
  render() {
    const {
      data
    } = this.props
    console.log(data)
    let activeKey = "";
    for (let i = 0; i < data.length; i++) {
      if (data[i].active === "1") {
        activeKey = String(i)
      }
    }
    console.log(typeof activeKey)
    let self = this
    return (
      <div>
        <Tabs defaultActiveKey={activeKey} className="dddd">
          {
            data.map(function(item,index){
              return (
                <TabPane 
                  tab={
                    <div className="div" id={data[index].id} name={data[index].name} onClick={self.handleClick.bind(this,data[index].name)}>
                      <img src={data[index].img} alt="" />
                      <p>{data[index].name}</p>
                    </div>
                  } 
                  key={index}
                  >
                </TabPane>
              )
            })
          }
        </Tabs>
      </div>

    )
  }
}



export default TabsBar