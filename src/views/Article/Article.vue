<script setup>
import RightContainer from '@/views/LayOut/components/RightContainer.vue'
import { onMounted, watch} from "vue";
import {useRoute} from 'vue-router'
import {getArticle_Content_ByTypeAPI} from '@/api/article_content'
import {useArticle_ContentStore} from '@/stores/article_content'
import { MdPreview,MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
import {getClientWidthStore} from '@/stores/clientWidth'
const ClientWidth = getClientWidthStore()
const scrollElement = document.documentElement;
const Article_ContentStore = useArticle_ContentStore()
const route = useRoute()
const getArticle_ContentByType = async (type) => {
  const result = await getArticle_Content_ByTypeAPI(type)
  Article_ContentStore.Setarticle_content(result.data.data)
}

onMounted( () => {
  getArticle_ContentByType(route.params.type)

})
watch(() => route.params,(newType) => {
  getArticle_ContentByType(newType.type)
  
})

const id = 'article'
</script>
<template>
    <div class="container">
      <div class="article_title">{{route.params.title}}</div>
      <MdPreview 
      v-for="item in Article_ContentStore.article_content" 
      :key="item.id"
      :modelValue="item.content"
      :editorId="`${id + item.id}`"
      showCodeRowNumber
      >
    </MdPreview>
    </div>
    <RightContainer v-if="ClientWidth.isShow">
      <MdCatalog
      :scrollElement="scrollElement" 
      v-for="item in Article_ContentStore.article_content" 
      :key="item.id"
      :modelValue="item.content"
      :editorId="`${id + item.id}`"
      />
    </RightContainer>
</template>
<style scoped>
.article_title {
  margin-top: 15px;
  text-align: center;
  font-size: 2.5rem;
  background: -webkit-linear-gradient(315deg, #00fff2 20%, #d400ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}
.container {
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