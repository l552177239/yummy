import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import Settings from '../../../settings'
import './comment.css'

class Comment extends React.Component {

  newComment = (e) => {
    e.preventDefault()
    let content = this.commentInput.value
    let user = localStorage.getItem('userId')
    let dish = this.props.dishId
    axios.post(`${Settings.host}/comment`, { content, user, dish }).then(res => {
      console.log('newComment...', res.data)
      axios.get(`${Settings.host}/comments`).then(
        res => {
          const { comments } = res.data
          this.props.dispatch({ type: 'LOAD_COMMENTS', comments })
        }
      )
      this.commentInput.value = ''
    })
  }

  render(){
    let { comments } = this.props
    let hereCommentKeys = Object.keys(comments).filter(id => comments[id].dish._id === this.props.dishId)

    let commentList =
      <ul className='comment-ul'>
        <li className="comment-item">
          <img src="http://media.haoduoshipin.com/yummy/default-avatar.png" alt="avatar" />
          <div className="comment-detail">
            <div className="username-time">
              <div className="comment-username">
                Liu
              </div>
              <div className="comment-time">
                17-7-29
              </div>
            </div>
            <div className="comment-content">
              好好吃啊
            </div>
          </div>
        </li>
        <li className="comment-item">
          <img src="http://media.haoduoshipin.com/yummy/default-avatar.png" alt="avatar" />
          <div className="comment-detail">
            <div className="username-time">
              <div className="comment-username">
                Happypetey
              </div>
              <div className="comment-time">
                17-7-30
              </div>
            </div>
            <div className="comment-content">
              真的好好吃啊
            </div>
          </div>
        </li>
      </ul>
    return(
      <div className="comment">
        {commentList}
        <form onSubmit={this.newComment}>
          <input ref={value => this.commentInput = value}
           type="text" placeholder="输入评论内容" />
          <input type="submit" value='提交' />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comment.all
})

export default connect(mapStateToProps)(Comment)
