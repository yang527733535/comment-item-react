import React, { Component } from 'react'
import axios from 'axios'
import PubSub from  'pubsub-js'
export default class Main extends Component {

    state = {
        initView: true,
        loading: false,
        users: null,
        errorMsg: null
    }

    componentDidMount(){
        //订阅消息（search）
        PubSub.subscribe('search',(msg,searchName)=>{
              this.setState({
                  initView: false,
                  loading: true,
              })
              //发ajax请求  
              const url = `https://api.github.com/search/users?q=${searchName}`
              axios.get(url)
                  .then(res => {
                      //得到响应数据
                      const result = res.data
                      console.log(result)
                      const users = result.items.map(item => ({
                          name: item.login,
                          url: item.html_url,
                          avatarUrl: item.avatar_url
                      }))
                      //更新状态（成功）
                      this.setState({
                          loading: false,
                          users
                      })
                  }).catch(err => {
                      //更新状态（失败）
                      this.setState({
                          loading: false,
                          errorMsg: err.message
                      })
                  })

        })
    }



  render() {
       const initView = this.state.initView
       const loading = this.state.loading
       const users = this.state.users
       const errorMsg = this.state.errorMsg
    const searchName = this.props.searchName
    console.log('render()', searchName);
 if (initView) {
    return  <h2>请求输入关键字搜索:{searchName}</h2>
   } else if(loading){
     return <h2> 正在请求中 </h2>
   } else if (errorMsg) {
     return <h2>{errorMsg}</h2>
   } else {
  return (
       
    <div className="row">
     {
       users.map((user,index)=>(
     <div className="card" key={index}>
        <a href={user.url} target="_blank">
          <img src={user.avatarUrl} style={{width:100}}/>
        </a>
        <p className="card-text">{user.name}</p>
      </div>
       ))
     }
      </div>
    )
   }
  }
}
