<template>
 <div>
  <navBar/>
  <img style="width:100%" src="../assets/udaipur_image1.jpg" alt="">
  <p></p>
  <routerView/>
 </div>
  

</template>

<script>
import navBar from '../components/navBar.vue';
export default {
  name: 'firstPage',
  components:{
    navBar
  }
}
</script>
