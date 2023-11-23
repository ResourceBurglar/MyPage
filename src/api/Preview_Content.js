import request from '@/utils/axios'

export const getContentAPI = () => {
    return request({
        url:'/preview'
    })
}