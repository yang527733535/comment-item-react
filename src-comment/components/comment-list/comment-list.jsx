import React, { Component } from 'react'
import './commentList.css'
import PropTypes from 'prop-types'
import CommentItem from '../comment-item/comment-item'
export default class CommentList extends Component {
    
     PropTypes = {
        comments: PropTypes.array.isRequired,
        deleteComment: PropTypes.func.isRequired
    }

  render() {
      const comments = this.props.comments
      const deleteComment = this.props.deleteComment
      const display = comments.length ===0? 'block' : 'none'
    return (
     <div className="col-md-8"> 
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
            {
             comments.map((comment, index) => <CommentItem index={index}  deleteComment={deleteComment} key={index} comment={comment}  /> )
            }
        </ul>
      </div>
    )
  }
}


