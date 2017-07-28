import React, { Component } from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import './dashboard.css'
import svg from './comment.svg'

class Dashboard extends Component  {
  render() {
    return(
      <div className="dashboard">
        <TitleHeader title="好友更新"/>
        <div className="feed-wrap">
          <div className="feed-item">
            <div className="feed-item-header">
              <div className="feed-user">
                <img src="http://media.haoduoshipin.com/yummy/default-avatar.png"  alt="avtar" />
                <div className="feed-user-name-wrap">
                  <div className="feed-user-name">
                    Billie Zhang
                  </div>
                  <div className="feed-user-time">
                    2017年7月
                  </div>
                </div>
              </div>
              <div className="feed-comment-btn">
                <img src={svg} alt="comment" />
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Dashboard
