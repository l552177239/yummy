import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import store from '../../../redux/store'

import './login.css'
import Settings from '../../../settings'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'

class Login extends React.Component {

  login = (e) => {
    e.preventDefault()
    let data = {
      username: this.usernameInput.value,
      password: this.passwordInput.value
    }
    axios.post(`${Settings.host}/user/login`, data)
    .then( res => {
      store.dispatch({ type: 'SIGN_IN', username: res.data.username })
      localStorage.setItem('userId',res.data.userId)
      this.props.history.push('/dashboard')
    })
    .catch(err =>
      store.dispatch({ type:'SHOW_ALERT', msg:err.response.data.msg })
    )
  }

  render() {
    return(
      <div className="login">
        <TitleHeader title="login" />
        <div className="login-content">
          <div className="login-hero" >
            <h1 className="title">
              登录
            </h1>
            <p className="slogan">
              连接小而确定的幸福
            </p>
          </div>
          <form onSubmit={this.login} className="login-form">
            <div className="login-text-inputs">
              <div className="login-text-inputs-inner">
                <input type="text" ref={value => this.usernameInput = value} placeholder="用户名" />
                <input type="password" ref={value => this.passwordInput = value} placeholder="密码" />
              </div>
            </div>
            <div className="login-actions">
              <button type="submit">登录</button>
            </div>
          </form>
          <div className="login-other-option">
            <Link to="/signup">没有账号？请先注册</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
