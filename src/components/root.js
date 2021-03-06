import React, {Component} from 'react'
import { init as firebaseInit } from './javascripts/firebase'
import {browserHistory} from 'react-router'
import Routes from './routes'

class Root extends Component {
  constructor(props) {
    super(props)
    firebaseInit();
  }

render() {
    return (
        <Routes history={browserHistory}/>
    )
  }
}
export default Root
