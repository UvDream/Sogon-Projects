import fetch from "../fetch";
import Cookies from 'js-cookie'

const api = {
    checkData: (data)=>{
        return fetch({
            url: '/jsbrgl/grantRecordController/grantRecord',
            method: 'POST',
            data,
            headers: { 
              "Content-Type": "application/json"
            }
        })
    },
    checkOneData: (data)=>{
        return fetch({
            url: '/jsbrgl/grantRecordController/grantRecord',
            method: 'POST',
            data,
            headers: { 
              "Content-Type": "application/json"
            }
        })
    }
}

export default api