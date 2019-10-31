import request from '@/api/fetch';

const api = {
    checkPerAccount: ()=>{
        return request({
            url: '/jsbrgl/PerAccount/findOne',
            method: 'POST',
        })
    }
}

export default api