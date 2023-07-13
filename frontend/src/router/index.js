import {createRouter, createWebHistory} from 'vue-router'
//import hoMe from "../views/hoMe.vue"
import firstPage from "../views/firstPage.vue"
import signUp from "../views/signUp.vue"
import loGin from "../views/loGin.vue"

const routes=[
    {
        path:'/',
        name:'firstPage',
        component:firstPage
    },
    {
        path:'/signup',
        name:'signUp',
        component:signUp
    },
    {
        path:'/login',
        name:'loGin',
        component:loGin
    }
]

const router= createRouter({
history: createWebHistory(),
 routes
})

export default router