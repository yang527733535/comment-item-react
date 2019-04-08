import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class CommentAdd extends Component {

   PropTypes = {
    addComment: PropTypes.func.isRequired
  }
   
  state ={
    username:'',
    content:''
  }
  handlesubmit = ()=>{
     //收集数据  并封装成comment对象
    const comment = this.state

    
     //更新状态
     this.props.addComment(comment)

     //清除输入数据
     this.setState({
       username:'',
       content:''
     })
  }
  handlenamechange = (event) => {
    const username = event.target.value
     this.setState({username})
  }
  handlecontentchange = (event) => {
 const content = event.target.value
     this.setState({content})
  }

  render() {
      const username = this.state.username
      const content = this.state.content
    return (
       <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input  onChange={this.handlenamechange}
            value={username} type="text" className="form-control" placeholder="用户名" />
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea  onChange={this.handlecontentchange}
            className="form-control" rows="6" value={content} placeholder="评论内容"></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button onClick={this.handlesubmit}   type="button" className="btn btn-default pull-right" >提交</button>
            </div>
          </div>
        </form>
      </div>
     
    )
  }
}
