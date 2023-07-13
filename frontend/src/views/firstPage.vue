<template>
 <div>
  <navBar/>
  <div class="land-bg">
    <h1 class="tag">Unleash Your Wanderlust, <br>Share Your Journeys</h1>
    <div class="search">

    </div>
  </div>
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
  },
  data() {
  return {
    imageUrl: require('@/assets/udaipur_image1.jpg').default
  };
}
}
</script>

<style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap');


  
.land-bg{
    /* background-image: url("/home/shubhangi/Desktop/musafir/frontend/src/assets/udaipur_image1.jpg"); */
    padding: 40%;
     background-image: url("https://i.ibb.co/5hfgMsp/udaipur-image1.jpg"); 
    background-repeat: no-repeat; 
    background-size: 100% auto;
}

.tag{
  /* font-family: 'Pacifico', cursive; */
  font-family: 'Caveat', cursive;
  font-size: 50px;
    position: absolute;
    top: 15%;
    left: 50%;
    color: white;
    padding: 0;
    text-align: center;
    transform: translate(-50%,-50%);
    text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
    
}
.search{
    position: absolute;
    left:0;
    top:100%;
    height: 28%;
    width: 100%;
    margin-top: .00001%;
    background-color: rgba(19,18,18,0.3);
    box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
}
</style>