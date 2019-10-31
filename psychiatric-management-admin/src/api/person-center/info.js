import request from '@/api/fetch';

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
    updateUserInfo: (data)=>{
        return request({
            url: '/jsbrgl/PerAccount/updateUserInfo',
            method: 'POST',
            data
        })
    }
}

export default api