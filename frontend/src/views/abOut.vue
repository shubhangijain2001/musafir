<template>
<div>
     <navBar1/>
     <h1>About Us</h1>
     <div class="about1">
        <p>Welcome to Musafir-The Travel Log, the ultimate destination for travel enthusiasts and adventure seekers. Whether you're a seasoned globetrotter or a passionate explorer, this platform is designed to help you capture, share, and relive your unforgettable travel experiences.

        <br><br>At Musafir-The Travel Log, we believe that every journey is unique and deserves to be celebrated. Our mission is to provide you with a seamless and immersive platform where you can create your personal travel log, showcase your adventures, and connect with like-minded individuals from around the world.

        </p>
        <img src="https://i.ibb.co/q9nTHWH/kasol-image2.jpg">
    </div>
    <div class="bottom-div">
        <div class="logo1">
            <div class="logos">
            <i class="fa-solid fa-users fa-5x"></i>
            <h2>17</h2>
            <p>Users</p>
        </div>
        <div class="logos">
            <!-- <i class="fa-solid fa-note"></i> -->
            <i class="fa-solid fa-images fa-5x"></i>

        </div>
        <div class="logos">
            <i class="fa-solid fa-city fa-5x"></i>
        </div>
        </div>
        
        <p class="bottom-p">dvgadfui</p>
    </div>
</div>

     
   
   </template>
   
   <script>
   import navBar1 from '../components/navBar1.vue';
   import '@fortawesome/fontawesome-free/css/all.css';

   export default {
     name: 'abOut',
     components:{
       navBar1,
     },
   }
   </script>
   
   <style scoped>
   
   /* @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
   @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap'); */
  @import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');

   
   
   /* .land-bg {
     background-image: url("/home/shubhangi/Desktop/musafir/frontend/src/assets/udaipur_image1.jpg"); //comment
     padding: 40%;
     background-image: url("https://i.ibb.co/5hfgMsp/udaipur-image1.jpg");
     background-repeat: no-repeat;
     background-size: 100% auto;
   }
   
   .tag {
     /* font-family: 'Pacifico', cursive; //comment
     font-family: 'Caveat', cursive;
     font-size: 50px;
     position: absolute;
     top: 15%;
     left: 50%;
     color: white;
     padding: 0;
     text-align: center;
     transform: translate(-50%, -50%);
     text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
   
   }
   
   .search {
     position: absolute;
     left: 0;
     top: 100;
     height: 200px;
     width: 100%;
     background-color: rgba(19, 18, 18, 0.3);
     
     
   }
   
   .search > p{
     font-family: Verdana, Geneva, Tahoma, sans-serif;
     font-size: 30px;
     font-weight: 300;
     letter-spacing: .1rem;
     color: white;
     text-align: center;
   } */
   img{
    margin-top: 30px;
    height:90%;
    width:95%;
   }
   .about1{
    display: grid;
    grid-template-columns: repeat(2,2fr);
    grid-gap:45px;
   }
   p{
    line-height: 2.5rem;
    font-size: 20px;
    font-family: 'Courgette', cursive;
    margin-left: 20px;
   }
   h1{
    font-size: 40px;
    text-align: center;
   }
   .bottom-div{
    background:#161616;
    height:90vh;
    width:100%;
   }
   .bottom-p{
    color: #fff;
   }
   .fa-users{
    padding: 10px;
    margin-top:40px ;
    color:#fff;
   }
   .fa-city{
    padding: 10px;
    margin-top:40px ;
    color:#fff;
   }
   .fa-images{
    padding: 10px;
    margin-top:40px ;
    color:#fff;
    /* content:e202; */
   }
   .logo1{
    display:flex;
    /* flex-direction: column; */
    justify-content: space-around;
   }
   .logos{
    text-align: center;
    color:#fff;
    font-family: Arial, Helvetica, sans-serif
   }
   .logos h1{
    margin-top: 100px;
   }
   
   </style>