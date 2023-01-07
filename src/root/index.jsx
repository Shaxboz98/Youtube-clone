import React, { Component } from 'react'
import Main from '../components/Main';
import Navbar from '../components/Navbar';

class Root extends Component {
  render () {
    return (
      <div>
        <Navbar/>
        <Main/>
      </div>
    )
  }
}

export default  Root;