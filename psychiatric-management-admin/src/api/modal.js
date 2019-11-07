import fetch from "./fetch";
import Cookies from 'js-cookie'

const api = {
  //转发
    forward: (data)=>{
        return fetch({
            url: '/jsbrgl/functionController/forward',
            method: 'POST',
            data,
            headers: { 
              "Content-Type": "application/json"
            }
        })
    },
  //办结
    finish: (data)=>{
        return fetch({
            url: '/jsbrgl/functionController/finish',
            method: 'POST',
            data,
            headers: { 
              "Content-Type": "application/json"
            }
        })
    },
  //退回
    back: (data)=>{
        return fetch({
            url: '/jsbrgl/functionController/back',
            method: 'POST',
            data,
            headers: { 
              "Content-Type": "application/json"
            }
        })
    },
    //启动
    startUp: (data)=>{
        return fetch({
            url: '/jsbrgl/functionController/startUp',
            method: 'POST',
            data,
            headers: { 
              "Content-Type": "application/json"
            }
        })
    }
}

export default api