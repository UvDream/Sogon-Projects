import request from '@/api/fetch';

const api = {
    checkPerAccount: ()=>{
        return request({
            url: '/jsbrgl/PerAccount/findOne',
            method: 'POST',
        })
    },
    updatePassWord: (data)=>{
        return request({
            url: '/jsbrgl/PerAccount/updatePassWord',
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