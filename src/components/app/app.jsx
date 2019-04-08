import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentList from  '../comment-list/comment-list'
import CommentAdd from '../comment-add/comment-add'
 
export default class App extends Component {
     //给组件对象指定state属性
     
   state = {
            comments :[
                {username:"tom",content:"react挺好的"},
                {username:"jack",content:"太难了"}  
            ]
        }
        //添加评论
   addComment = (comment) =>{
        const comments = this.state.comments
            comments.unshift(comment)
            //更新状态
            this.setState({comments})
   }

     //删除评论
     deleteComment = (index)=>{
             const comments = this.state.comments
            comments.splice(index,1)
            //更新状态
            this.setState({comments})
     }
  render() {
       const comments = this.state.comments
    return (
      <div>
    <header className="site-header jumbotron">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div className="container">
        <CommentAdd addComment={this.addComment} ></CommentAdd>
        <CommentList  deleteComment={this.deleteComment}  comments={comments}></CommentList>
       </div>
  </div>
    )
  }
}

// CommentList.PropTypes = {
//     comments: PropTypes.array.isRequried
// }