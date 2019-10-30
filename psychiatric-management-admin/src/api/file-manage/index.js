import request from '@/api/fetch';

const api = {
    checkData: (data)=>{
        return request({
            url: '/jsbrgl/archivesManageController/getFindFile',
            method: 'POST',
            data
        })
    }
}

export default api