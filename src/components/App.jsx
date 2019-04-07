import React, { Component } from 'react'
import logo from '../logo.svg'
import '../index.css'
export default class App extends Component {
  render() {
    return (
      <div>
    <img className='logo' src={logo} alt=""/>
    <p className='title'>这是react app组件</p>
      </div>
    )
  }
}


