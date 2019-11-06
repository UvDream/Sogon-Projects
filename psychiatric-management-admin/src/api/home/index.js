import fetch from "../fetch";
import Cookies from 'js-cookie'

const api = {
    //待办事件查询
    isNeedDo: ()=>{
        return fetch({
            url: '/jsbrgl/archivesManageController/isNeedDoArchives',
            method: 'POST',
            headers: { 
              "Content-Type": "application/json"
            }
        })
    }
}

export default api