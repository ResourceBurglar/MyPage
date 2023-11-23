import request from '@/utils/axios'
export const getArticle_Content_ByTypeAPI = (type) => {
    return request({
        url:'/article/type',
        method:'get',
        params:{
            type:type
        }
    })
}