import React, { Component } from 'react'

// export function hocTest(WrappedComponent) {
//   return class extends Component {
//     render() {
//       const newProps = {
//         name: "cqm",
//         value: "testData"
//       }
//       return <WrappedComponent {...this.props} {...newProps} />
//     }
//   }
// }

const hocTest = (WrappedComponent) => {
  return class extends Component {
    render() {
      const newProps = {
        name: "cqm",
        value: "testData"
      }
      return <WrappedComponent {...this.props} {...newProps} />
    }
  }
}


class hocDemo1 extends Component {
	render() {
		console.log(this.props.name)
		console.log(this.props.value)
		return (
	    <div>pang</div>
		)
	}
}

const hocDemo = hocTest(hocDemo1)
export default hocDemo
 