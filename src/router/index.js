import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/LayOut/LayOut.vue'
import Article from '@/views/Article/Article.vue'
import Edit from '@/views/Edit/Edit.vue'
import Preview from '@/views/Preview/Preview.vue'
import Home from '@/views/Home/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',redirect:'/MyBlog/Home'
    },
    {
      path:'/MyBlog/Home',components:{
        default:Layout,
        Home:Home
      }
    },
    {
      path:'/MyBlog/Article/:title/:type',components:{
        default:Layout,
        Article:Article
      }
    },
    
    {
      path:'/Edit',
      components:{
        default:Layout,
        Edit:Edit
      }
    },
    {
      path:'/Preview',
      component:Preview
    }

  ]
})

export default router
