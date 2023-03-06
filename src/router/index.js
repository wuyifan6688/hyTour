import {createRouter,createWebHashHistory }from  "vue-router"

const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        {
            path:"/home",
            component:()=>import("@/views/home/home.vue"),
            meta:{
                hideTabbar:false
            }
        },
      
        {
            path:"/message",
            component:()=>import("@/views/message/message.vue"),
            meta:{
                hideTabbar:true
            }
        },
        {
            path:"/favor",
            component:()=>import("@/views/favor/favor.vue"),
            meta:{
                hideTabbar:false
            }
        },  {
            path:"/order",
            component:()=>import("@/views/order/order.vue"),
            meta:{
                hideTabbar:false
            }
        },
        {
            path:"/search",
            component:()=>import("@/views/search/search.vue")
        },
        {
            path:"/city",
            component:()=>import("@/views/city/city.vue"),
            meta:{
                hideTabbar:true
            }
        },
        {
            path:"/detail/:id",
            component:()=>import("@/views/detail/detail.vue"),
            meta:{
                hideTabbar:true
            }
        },
    ]
})

export default router