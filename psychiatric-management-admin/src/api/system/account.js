import request from "../fetch";
import Cookies from 'js-cookie'

const api = {
    checkData: ()=>{
        return request({
            url: '/jsbrgl/user/queryByConditions',
            method: 'POST',
            headers: { 
              "Content-Type": "application/json"
            }
        })
    },
    updateUserInfo: (data)=>{
        return request({
            url: '/jsbrgl/user/updateUserInfo',
            method: 'POST',
            data,
            headers: { 
              "Content-Type": "application/json"
            }
        })
    },
    deleteInfos: (data)=>{
        return request({
            url: '/jsbrgl/user/deleteInfos',
            method: 'POST',
            data,
            headers: { 
              "Content-Type": "application/json"
            }
        })
    }
}

export default api