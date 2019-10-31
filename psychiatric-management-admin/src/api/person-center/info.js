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
    }
}

export default api