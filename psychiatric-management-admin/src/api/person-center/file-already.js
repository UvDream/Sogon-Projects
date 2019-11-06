import request from '@/api/fetch';

//已办
const api = {
    checkData: (data)=>{
        return request({
            url: '/jsbrgl/InfoManager/queryByCoditions',
            method: 'POST',
            data
        })
    },
    //修改已读状态
    updateMessage: (data)=>{
        return request({
            url: '/jsbrgl/InfoManager/updateMessageById',
            method: 'POST',
            data
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
}

export default api