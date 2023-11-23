import { defineStore } from "pinia";
import {ref} from 'vue'
import {getArticle_TpyeAPI} from '@/api/article_type'
export const useArticle_TpyeStore = defineStore('article_type',() => {
    const article_type = ref([])
    const getArticleType = async () => {
        const result = await getArticle_TpyeAPI()
        article_type.value = result.data.data
    }

    return {
        article_type,
        getArticleType
    }
})