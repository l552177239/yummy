import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './signup.css'
import Settings from '../../../settings'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'

class Signup extends React.Component {

  signup = (e) => {
    e.preventDefault()
    let data = {
      username: this.usernameInput.value,
      password: this.passwordInput.value
    }
    axios.post(`${Settings.host}/user/signup`, data)
    .then( res => {
      this.props.dispatch({ type:'SIGN_IN', username: res.data.username })
      localStorage.setItem('userId', res.data.userId)
      this.props.history.push('/dashboard')
    })
    .catch(err =>
      this.props.dispatch({ type:'SHOW_ALERT', msg:err.response.data.msg })
    )
  }

  render() {
    return(
      <div className="signup">
        <TitleHeader title="signup" />
        <div className="signup-content">
          <div className="signup-hero" >
            <h1 className="title">
              注册
            </h1>
            <p className="slogan">
              连接小而确定的幸福
            </p>
          </div>
          <form onSubmit={this.signup} className="signup-form">
            <div className="signup-text-inputs">
              <div className="signup-text-inputs-inner">
                <input type="text" ref={value => this.usernameInput = value} placeholder="用户名" />
                <input type="text" placeholder="Email" />
                <input type="password" ref={value => this.passwordInput = value} placeholder="password" />
                <input type="password" placeholder="再输一遍" />
              </div>
            </div>
            <div className="signup-actions">
              <button type="submit">注册</button>
            </div>
          </form>
          <div className="signup-other-option">
            <Link to="/login">已有账号？直接登录</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null)(Signup)
