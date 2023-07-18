<template>

<div>
<navBar1/>
<postTemplate/>
<FooTer/>
</div>

</template>


<script>

import navBar1 from "../components/navBar1.vue";
import postTemplate from "../components/postTemplate.vue";
import FooTer from "../components/FooTer.vue";

export default{
    name:'homePage',
    data(){
        return{

        }
    },
    components:{
        navBar1,
        postTemplate,
        FooTer
    }
}
</script>


<style scoped>



</style>