import {createRouter, createWebHashHistory} from 'vue-router'
import home from '@/pages/homePage/index.vue'
import categoryBywine from '@/pages/categoryBywine/index.vue'
const routes=createRouter({
        history:createWebHashHistory(),
        routes:[
            {
                path:'/',
                component:home
            },
            {
                path:'/categoryBywine',
                component:categoryBywine
            }
        ]
})
export default routes