 import React, { Component } from 'react'
// import logo from './logo.svg'
// import './App.css'
import { Tabs, WhiteSpace } from 'antd-mobile'

// const hocTest = (WrappedComponent) => {
//   return class extends Component {
//     render() {
//       const newProps = {
//         one: "one",
//         two: "two",
//         three: "three"
//       }
//       return <WrappedComponent {...this.props} {...newProps} />
//     }
//   }
// }

// class App extends Component {
//   render() {
//     console.log(this.props)
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     )
//   }
// }

// export default hocTest(App)


const HocTest = (pageTitle = "lalala") => (WrappedComponent) => {
  return class extends Component {
    componentDidMount() {
      console.log("hoc")
    }

    render() {
      const newProps = {
        one: "one",
        two: "two",
        three: "three"
      }
      return <WrappedComponent title={pageTitle} {...this.props} {...newProps} />
    }
  }
}

// const fn = (aa = 123) => (Ww) => {
//   return class extends Component {

//     render() {
//       return (
//         <Ww  aa={aa}/>
//       )
//     }
//   }
// } 


// @fn(66666666)
// class Aa extends Component {
//   render() {
//     return <div>{this.props.aa}</div>
//   }
// }

// class Ba extends Component {
//   render() {
//     return <div>{this.props.aa}</div>
//   }
// }




const TabPane = Tabs.TabPane

function callback(key) {
  console.log('onChange', key);
}
function handleTabClick(key) {
  console.log('onTabClick', key);
}

@HocTest("lalal")
export default class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={callback} onTabClick={handleTabClick} swipeable={false} pageSize={3}>
          <TabPane tab={this.props.title} key="1">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
              {this.props.title}
            </div>
          </TabPane>
          <TabPane tab={this.props.two} key="2">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
              选项卡二内容
            </div>
          </TabPane>
          <TabPane tab={this.props.three} key="3">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
              选项卡三内容
            </div>
          </TabPane>
           <TabPane tab={this.props.three} key="4">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
              选项卡三内容
            </div>
          </TabPane>
           <TabPane tab={this.props.three} key="5">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
              选项卡三内容
            </div>
          </TabPane>
           <TabPane tab={this.props.three} key="6">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
              选项卡三内容
            </div>
          </TabPane>
           <TabPane tab={this.props.three} key="7">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
              选项卡三内容
            </div>
          </TabPane>
           <TabPane tab={this.props.three} key="8">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
              选项卡三内容
            </div>
          </TabPane>
           <TabPane tab={this.props.three} key="9">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
              选项卡三内容
            </div>
          </TabPane>
        </Tabs>
        <WhiteSpace />
      </div>
    )
  }
}