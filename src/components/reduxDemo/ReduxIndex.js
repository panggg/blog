import React, {
  Component
} from 'react'
import {
  createStore
} from 'redux'
import {
  Provider
} from 'react-redux'
import ReduxDemo from './ReduxDemo'
import todoApp from '../../reducers/reduxDemo'

let store = createStore(todoApp);


export default class ReduxIndex extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxDemo />
      </Provider>
    )
  }
}