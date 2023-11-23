import request from '@/utils/axios'
export const getArticle_HomeAPI = () => {
    return request({
        url:'/getArticleHome'
    })
}