import { defineStore } from "pinia";
import {ref} from 'vue'
export const useArticle_ContentStore = defineStore('article_content',() => {
    const article_content = ref([])
    const Setarticle_content = (data) => {
        article_content.value = data
    }

    return {
        article_content,
        Setarticle_content
    }
})