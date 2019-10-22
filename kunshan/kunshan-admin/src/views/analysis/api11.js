import request from '@/api/request';
import qs from "qs";

const api = {
    fetchTablePaiming: (data)=>{
        return request({
            url: 'manager/ewpn/searchewpn',
            method: 'POST',
            data
        })
    },
    saveTablePaiming: (data)=>{
        return request({
            url: 'manager/ewpn/saveewpn',
            method: 'post',
            headers: {"Content-Type":"application/json;charset=UTF-8"},
            data
        })
    }
}

export default api