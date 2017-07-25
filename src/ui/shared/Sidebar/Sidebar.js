import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import './sidebar.css'

class Sidebar extends Component{
  render(){
    return(
      <div className="Sidebar">
        <Menu isOpen>
          <div className='bm-user-info'>
            <img src='http://media.haoduoshipin.com/yummy/default-avatar.png' alt='avata' />
            <div className='bm-user-info'>
              <Link className='bm-user-left'>Liu</Link>
              <Link className='bm-user-right'>退出</Link>
            </div>
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


//筛选公司
