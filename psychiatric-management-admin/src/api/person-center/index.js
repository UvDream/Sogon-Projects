import request from "../fetch";
import Cookies from 'js-cookie'

const api = {
    checkPerAccount: ()=>{
        return request({
            url: '/jsbrgl/PerAccount/findOne',
            method: 'POST',
            headers: { 
              "Content-Type": "application/json"
            }
        })
    },
    updatePassWord: (data)=>{
        return request({
            url: '/jsbrgl/PerAccount/updatePassWord',
            method: 'POST',
            data,
            headers: { 
              "Content-Type": "application/json"
            }
        })
    },
    updateUserInfo: (data)=>{
        return request({
            url: '/jsbrgl/PerAccount/updateUserInfo',
            method: 'POST',
            data,
            headers: { 
              "Content-Type": "application/json"
            }
        })
    }
}

export default api