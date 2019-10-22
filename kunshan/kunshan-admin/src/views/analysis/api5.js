import request from '@/api/request';
import qs from "qs";

const api = {
    fetchTablePaiming: (data)=>{
        return request({
            url: 'manager/ltbeach/zjsstrsrysyafs',
            method: 'POST',
            data
        })
    },
    saveTablePaiming: (data)=>{
        return request({
            url: 'manager/ltbeach/savezjsstrsrysyafs',
            method: 'post',
            headers: {"Content-Type":"application/json;charset=UTF-8"},
            data
        })
    }
}

export default api