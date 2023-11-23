<script setup>
import {useArticle_TpyeStore} from '@/stores/article_type'
import LeftContainer from '@/views/LayOut/components/LeftContainer.vue'
import NavHeader from './components/NavHeader.vue'
import {getClientWidthStore} from '@/stores/clientWidth'
import {useRoute} from 'vue-router'
const route = useRoute()
const ClientWidth = getClientWidthStore()
const getArticle_Type = useArticle_TpyeStore()
getArticle_Type.getArticleType()

</script>

<template>
    <NavHeader />
    <LeftContainer v-if="ClientWidth.isShow && (route.path !== '/Edit' && route.path !== '/edit')"></LeftContainer>
    <router-view name="Home"></router-view>
    <router-view name="Article"></router-view>
    <router-view name="Edit"></router-view>
</template>
<style scoped>
</style>