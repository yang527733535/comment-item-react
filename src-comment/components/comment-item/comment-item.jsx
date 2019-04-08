import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './commentitem.css'

export default class CommentItem extends Component {

     PropTypes ={
        comment: PropTypes.object.isRequired,
        deleteComment: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired
    }
    handledelete = () =>{
        const deleteComment = this.props.deleteComment
        const comment = this.props.comment
        const index = this.props.index
        //提示 确定后删除
        if (window.confirm(`确定删除${comment.username}的评论吗？`)){
             //确定后删除
             deleteComment(index)
        }
    }

  render() {
      const comment = this.props.comment
    return (
        <li className="list-group-item">
            <div className="handle">
              <a onClick={this.handledelete} href="javascript:;">删除</a>
            </div>
            <p className="user"><span >{comment.username}</span><span>说:</span></p>
            <p className="centence">{comment.content}</p>
          </li>
         
    )
  }
}
