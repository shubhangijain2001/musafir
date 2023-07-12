import {createRouter, createWebHistory} from 'vue-router'
//import hoMe from "../views/hoMe.vue"
import firstPage from "../views/firstPage.vue"

const routes=[
    {
        path:'/',
        name:'firstPage',
        component:firstPage
    }
]

const router= createRouter({
history: createWebHistory(),
 routes
})

export default router