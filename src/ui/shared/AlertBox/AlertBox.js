import React, { Component } from 'react'
import './alert-box.css'

class AlertBox extends Component {

  state = {
    showAlert: true
  }

  closeAlert = () => {
    this.setState({
      showAlert: false
    })
  }

  render() {
    return(
      <div className={  this.state.showAlert ? "alert-box show" : "alert-box" }>
        <div className="alert-content-card">
          <div className="alert-msg">
            报错信息
          </div>
          <div onClick={this.closeAlert}
            className="alert-close-button">
            关闭
          </div>
        </div>
      </div>
    )
  }
}

export default AlertBox
