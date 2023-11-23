<script setup>
import {useArticle_TpyeStore} from '@/stores/article_type'
import '@/assets/css/NavHeader.css'
import {ref} from 'vue'
import {useRouter} from 'vue-router'
const getArticle_Type = useArticle_TpyeStore()
const router = useRouter()
const iconShow = ref(false)
const isSelected = ref(null)
const iconToggle = () => {
    iconShow.value = !iconShow.value
}
const selectItem = (itemId) => {
    isSelected.value = itemId
}

</script>

<template>
    <div class="header">
        <span class="icon" @click="iconToggle()"><img src="@/assets/images/code.png" alt="" id="icon-code"></span>
        <Transition name="mini-title">
            <div v-show="iconShow" class="article-title" >
                <span @click="iconToggle();router.push('/');selectItem(0)" class="index"
                :class="{'index-selected':isSelected === 0}"
                >首页</span>
                <RouterLink :to="`/MyBlog/Article/${item.type}/${item.id}`"  v-for="item in getArticle_Type.article_type" :key="item.id">
                    <ul class="main" @click="iconToggle(),selectItem(item.id)" :class="{'li-selected':isSelected === item.id}">
                        <li class="main-li">{{item.type}}</li>
                    </ul>
                </RouterLink>
            </div>
        </Transition>
        <span class="title" @click="router.push('/')">NoteBook</span>
        <span class="inp"><input type="text" placeholder="Search"></span>
        <span class="avator"><img src="@/assets/images/avator/1.png" alt="" id="avator-img"></span>
    </div>
    
    
</template>

<style scoped>
@media screen and (max-width:800px){


    .header {
        background-color: #f0f4f2;
        height: 3rem;
    }
    .title {
        display: none;
    }
    .icon {
        display: inline-block;
        height: 100%;
        width: 3rem;
        position: relative;
        /* border: 1px solid black; */
    }
    .icon:hover {
        cursor: pointer;
    }
    #icon-code {
        width: 90%;
        height: 90%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .avator {
        height: 100%;
        width: 3rem;
    }
    .inp {
        position: relative;
    }
    input {
        width: 200px;
        height: 40px;
        background-color: #fff;
        font-size: 20px;
    }
    .article-title {
        z-index: 999;
       display: block;
       position: absolute;
       top: 3rem;
       width: 100%;
       background-color: white;
       margin-top: 20px;
    }
    .index {
        font-weight: 700;
        font-size: 35px;
    }
    .index-selected {
        color: rgb(70, 157, 255);
    }

    .article-title span,li {
        display: block;

        text-align: center;
    }
    .article-title span:hover {
        cursor: pointer;
    }
    .main {
        margin: 10px 0;
    }
    .main-li {
        font-size: 25px;
        padding: 5px 0;

    }
    .main-li:hover {
        background: rgb(240,242,244);
    }
    .li-selected {
        color: rgb(70, 157, 255);
        font-weight: 700;
        background: rgb(225, 239, 255)!important;
    }

    .mini-title-enter-active {
        animation: left_to_right 0.5s;
    }
    .mini-title-leave-active {
        animation: left_to_right 0.5s reverse;
    }
    @keyframes left_to_right {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
   


}
</style>