import fetch from "../fetch";
import Cookies from 'js-cookie'

const api = {
    checkData: (data)=>{
        return fetch({
            url: '/jsbrgl/archivesManageController/getFindFile',
            method: 'POST',
            data,
            headers: { 
              "Content-Type": "application/json",
              "token": Cookies.get('TokenKey')
            }
        })
    },
    deleteData: (data)=>{
        return fetch({
            url: '/jsbrgl/archivesManageController/deleteArchives',
            method: 'POST',
            data,
            headers: { 
              "Content-Type": "application/json",
              "token": Cookies.get('TokenKey')
            }
        })
    }
}

export default api