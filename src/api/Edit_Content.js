import request from '@/utils/axios'

export const insertContentAPI = (data) => {
    return request({
        url:'/edit',
        method:'post',
        data:data
    })
}