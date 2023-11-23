<script setup>
import {useArticle_TpyeStore} from '@/stores/article_type'
// import {getArticle_TitleAPI} from '@/api/article_type'
import {useRoute} from 'vue-router'
import {ref} from 'vue'
const route = useRoute()
const getArticle_Type = useArticle_TpyeStore()
const isSelected = ref(null)
const subIsShow = ref(false)

// const article_typeTitle = ref([])
// const getArticle_Title = async (typeId) => {
//   const result = await getArticle_TitleAPI(typeId)
//   article_typeTitle.value = result.data.data
// }
const selectItem = (itemId) => {
    
    subIsShow.value = !subIsShow.value
    if(subIsShow.value) {
      isSelected.value = itemId
      // getArticle_Title(itemId)
 
    }else{
      isSelected.value = -1
    }
}

</script>
<template>
  <div class="left">
    <RouterLink :to="`/MyBlog/Article/${item.type}/${item.id}`"  v-for="(item) in getArticle_Type.article_type" :key="item.id">
        <ul class="main" @click="selectItem(item.id)" :class="{'li-selected':isSelected === item.id && route.path !== '/MyBlog/Home'}">
            <li class="main-li">{{item.type}}</li>
        </ul>
          <!-- <ul class="sbu-ul" v-show="isSelected === item.id"  v-for="(subitem,index) in article_typeTitle" :key="index" :class="{'.sbu-ul-selected':isSelected === item.id}">
              <li class="sub-li">{{subitem.title}}</li>
          </ul> -->
    </RouterLink>
  </div>
</template>

<style scoped>
.left {
    float: left;
    /* border: 1px solid black; */
    width: 17%;
    /* margin-top: 20px; */
}
.left .main-li {
  /* border: 1px solid black; */
  padding-left: 10px;
  font-size: 25px;
  margin-bottom: 20px;
  padding: 5px 0;
  font-size: 30px;
}
.main-li:hover {
  background-color: rgb(240,242,244);
}
.li-selected {
  color: rgb(70, 157, 255);
  font-weight: 700;
  background-color: rgb(225, 239, 255)!important;
}
/* .sbu-ul {
  border: 1px solid black;
  padding-left: 35px;
  font-size: 25px;
  margin-bottom: 10px;
  color: rgb(119, 70, 255);
}
.sub-li:hover {
  background-color: rgb(240,242,244);
} */


</style>

