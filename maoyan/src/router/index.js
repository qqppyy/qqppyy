import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../views/home'
import Mine from '../views/mine'
import City from '../views/city'
import HomeHot from '../views/home/HomeHot.vue'
import HomeComing from '../views/home/HomeComing.vue'

import Cinema from '../views/cinema'
import Search from '../views/search'
import Error from '../views/error'
Vue.use(VueRouter)

const router = new VueRouter(
    {
        mode:'history',
        routes:[
            {
                path:'/',
                redirect:'/home'
            },
            {
                path:'/home',
                redirect:'/home/homehot',
                component:Home,
                children:[
                    {
                        path:'homehot',
                        component:HomeHot,
                        name:'f-hot'
                    }, 
                    {
                        path:'homecoming',
                        component:HomeComing,
                        name:"f-coming"
                    }
                ]
            },
            {
                path:'/cinema',
                component:Cinema
            },
            {
                path:'/mine',
                component:Mine
            }, 
         
            {
                path:'/city',
                component:City
            },   
            {
                path:'/search',
                component:Search
            }, 
            {
                path:'*',
                component:Error
            },     
        ]
    }
)
export default router