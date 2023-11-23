import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/LayOut/LayOut.vue'
import Article from '@/views/Article/Article.vue'
import Home from '@/views/Home/Home.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',redirect:'/MyPage'
    },
    {
      path:'/MyPage',components:{
        default:Layout,
        Home:Home
      }
    },
    {
      path:'/MyBlog/Article/:title/:type',components:{
        default:Layout,
        Article:Article
      }
    }

  ]
})

export default router
