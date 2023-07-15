<template>
    <!-- <navBar1/> -->
    <div class="outer-div">
        <div class="login-container">
            <div class="left-div">
                <div>
                    <h1>Your travel memories, all in one place.</h1> 
                    <p>Login and start sharing.</p>
                </div>
            </div>
            
            <div class="right-div">
                <h1>Musafir</h1>
            <input type="text" placeholder="Email" v-model="email"><br>
            <input type="password" placeholder="Enter the Password" v-model="password"><br>
            <button @click="login">LOG IN</button>
            </div>
        </div>
    </div>

</template>
   
   <script>
//    import navBar1 from "../components/navBar1.vue"
   import axios from 'axios'
   export default {
     name: 'loGin',
     components:{
        // navBar1
     },
     data(){
        return{
            email:'',
            password:'',

        }
     },
     methods:{
        async login(){
            console.log(this.email, this.password)
            let result =await axios.post("http://localhost:5000/login",{email:this.email, password:this.password})
            console.log('ggi')
            console.log(result.data)
            if(result.status==201 && result.data.length<=0){
                console.log('invalid user')
            }
        }
     }
     
   }
   </script>
   
   <style scoped>
   
     
   .land-bg{
       /* background-image: url("/home/shubhangi/Desktop/musafir/frontend/src/assets/udaipur_image1.jpg"); */
       padding: 40%;
        background-image: url("https://i.ibb.co/5hfgMsp/udaipur-image1.jpg"); 
       background-repeat: no-repeat; 
       background-size: 100% auto;
   }
   
   .tag{
       position: absolute;
       top: 20%;
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