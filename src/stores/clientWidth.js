import {ref,computed} from 'vue'
import { defineStore } from 'pinia'
export const getClientWidthStore = defineStore('clientWidth',() => {
    const ScreenWidth = ref(document.body.clientWidth)
    window.addEventListener('resize',() => ScreenWidth.value = document.body.clientWidth)
    const isShow = computed(() =>  ScreenWidth.value<=800?false:true)
    return {
        ScreenWidth,
        isShow
    }
})