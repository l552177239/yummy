import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg'
import './home.css'

class Home extends Component{
  render(){
    return(
      <div className="home">
        <div className='hero'>
          {/* hero最醒目的版块 */}
          <img className='app-logo' src={logo} alt='logo' />
          <h1 className='title'>
            吮指
          </h1>
          <p className='slogan'>
            享受舌尖艳遇
          </p>
        </div>
        <div className='actions'>
          <Link to='/signup'>注册</Link>
          <Link to='/login'>登录</Link>
        </div>
      </div>
    )
  }
}

export default Home
