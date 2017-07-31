import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './sidebar.css'

import { slide as Menu } from 'react-burger-menu'

class Sidebar extends React.Component {

  state = {
    isOpen: false
  }

  closeBmMenu = () => {
    this.setState({
      isOpen: false
    })
  }

  logout = () => {
    localStorage.removeItem('userId')
  }
  render() {
    let authStr = (
      <div>
        <Link to='/signup' onClick={this.closeBmMenu}>注册</Link>|
        <Link to='/login'  onClick={this.closeBmMenu}>登录</Link>
    </div>
    )
    console.log(this.props)
    let userInfo = (
      <div>
        <Link to="" className="bm-user-left">
          {this.props.currentUser}
        </Link>
        <Link to="" className="bm-user-right" onClick={this.logout}>
          退出
        </Link>
      </div>
    )
    return(
      <div className="sidebar">
        <Menu isOpen={this.state.isOpen}>
          <div className="bm-user-info">
            <img src="http://media.haoduoshipin.com/yummy/default-avatar.png" alt="avatar" />
            <div className="bm-user-auth">
              { this.props.isAuthenticated ? userInfo : authStr }
            </div>
          </div>
          <div className="bm-link-list">
            <Link onClick={this.closeBmMenu} to="/">Home</Link>
            <Link onClick={this.closeBmMenu} to="/signup">注册</Link>
            <Link onClick={this.closeBmMenu} to="/cart">购物车</Link>
            <Link onClick={this.closeBmMenu} to="/dishes">猜你喜欢</Link>
          </div>
          <button onClick={this.closeBmMenu} className="bm-close-button">
            关闭
          </button>
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.account.currentUser,
  isAuthenticated: state.account.isAuthenticated
})
export default connect(mapStateToProps)(Sidebar)
