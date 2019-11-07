import fetch from "../fetch";
import Cookies from 'js-cookie'

const api = {
    checkData: (data)=>{
        return fetch({
            url: '/jsbrgl/archivesManageController/getFindFile',
            method: 'POST',
            data,
            headers: { 
              "Content-Type": "application/json"
            }
        })
    },
    deleteData: (data)=>{
        return fetch({
            url: '/jsbrgl/archivesManageController/deleteArchives',
            method: 'POST',
            data,
            headers: { 
              "Content-Type": "application/json"
            }
        })
    },
    //转发、办结前判断资料是否填写完整
    isSave: (data)=>{
        return fetch({
            url: '/jsbrgl/functionController/isSave',
            method: 'POST',
            data,
            headers: { 
              "Content-Type": "application/json"
            }
        })
    },
    //流程图
    flow: (data)=>{
        return fetch({
            url: '/jsbrgl/archivesManageController/flow',
            method: 'POST',
            data,
            headers: { 
              "Content-Type": "application/json"
            }
        })
    },
    //退回前的调用
    backDept: (data)=>{
        return fetch({
            url: '/jsbrgl/functionController/backDept',
            method: 'POST',
            data,
            headers: { 
              "Content-Type": "application/json"
            }
        })
    },
}

export default api