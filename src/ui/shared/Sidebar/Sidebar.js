import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import './sidebar.css'

class Sidebar extends Component{
  render(){
    return(
      <div className="Sidebar">
        <Menu>
          <div className='bm-user-info'>
            UserInfo
          </div>
          <div className='bm-link-list'>
            <Link to='/'>首页</Link>
            <Link to='/signup'>注册</Link>
          </div>
          <button className='bm-close-button'>关闭</button>
        </Menu>
      </div>
    )
  }
}

export default Sidebar
