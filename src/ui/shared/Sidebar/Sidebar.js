import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends Component{
  render(){
    return(
      <div className="Sidebar">
        <Link to='/'>首页</Link>
        <Link to='/signup'>注册</Link>
      </div>
    )
  }
}

export default Sidebar
