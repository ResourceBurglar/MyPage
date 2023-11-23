import request from '@/utils/axios'

export const getArticle_TpyeAPI = () => {
    return request({
        url:'/getArticleType'
    })
}

export const getArticle_TitleAPI = (typeId) => {
    return request({
        url:`/getArticleTypeTitle`,
        params:{
            type:typeId
        }
    })
}