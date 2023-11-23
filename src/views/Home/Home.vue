<script setup>
import '@/assets/css/Home.css'
import { MdPreview, MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
import RightContainer from '@/views/LayOut/components/RightContainer.vue' 
import {getArticle_HomeAPI} from '@/api/article_Home'
import {ref} from 'vue'
import {getClientWidthStore} from '@/stores/clientWidth'
const ClientWidth = getClientWidthStore()
const index_content = ref([
    
])
const getArticle_Home = async () => {
  const result = await getArticle_HomeAPI()
  index_content.value = result.data.data
}
getArticle_Home()
const scrollElement = document.documentElement;
const id = 'Home'
</script>

<template>
    <div class="container">
        <div class="HomeTitle">首页</div>
        <MdPreview 
        v-for="item in index_content"
        :key="item.id"
        :modelValue="item.content"
        :editorId="`${id + item.id}`"
        ></MdPreview>
    </div>
    <RightContainer v-if="ClientWidth.isShow">
      <MdCatalog 
      v-for="item in index_content"
      :key="item.id"
      :scrollElement="scrollElement"
      :editorId="`${id + item.id}`"
      ></MdCatalog>
    </RightContainer>
</template>

<style scoped>

.HomeTitle {
  /* border: 1px solid black; */
  text-align: center;
  font-size: 80px;
  font-weight: 700;
  margin-top: 10px;
}
.container {
  height: 100%;
    /* border: 1px solid black; */
    float: left;
    width: 60%;
    /* height: 400px; */
    margin: 0 3%;
    margin-top: 20px;
    background-image: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 10px,
      #e4e4e4 10px,
      #e4e4e4 11px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 10px,
      #e4e4e4 10px,
      #e4e4e4 11px
    );
  background-size:
    90% 20px,
    20px 90%;
}

@media screen and (max-width:800px) {
    .container {
        width: 100%;
    }
}
</style>