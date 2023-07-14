<template>
    <div>
        <navBar1/>
    <div>
        <p>Create account</p>
        <input type="text" placeholder="Name" v-model="name"><br>
        <input type="text" placeholder="Email" v-model="email"><br>
        <input type="password" placeholder="Create Password" v-model="password"><br>             
        <button @click="signup">Submit</button>
    </div>
</div>
   
   </template>
   
   <script>
   import navBar1 from "../components/navBar1.vue"
   import axios from 'axios'
   export default {
     name: 'signUp',
     components:{
        navBar1
     },
     data(){
        return{
            name:'',
            email:'',
            password:'',

        }
     },
     methods:{
        async signup() {
      // do something with the username, email, password
      console.log('Signing up with:', this.name, this.email, this.password);
        let result= await axios.post("http://localhost:5000/users",{
        name:this.name,
        email:this.email,
        password:this.password
     })
      console.log(result.data)
     if(result.data=='user already exist')
     {
        alert('user already exist!!')
        console.log('hello')
        this.name=''
        this.email=''
        this.password=''
     }
     //console.log(result.data)
     /*let res= await axios.post(`http://localhost:5500/login`,{phone:parseInt(this.phone),password:this.password});
     if(result.status==201)
     {
        localStorage.setItem('user',JSON.stringify(res.data[0]));
        if(res.data[0].type=='user'){
          this.$router.push({name:'Products'})
        }
        else if(res.data[0].type=='admin'){
          this.$router.push({name:'addProduct'})
        }
    
    }*/
  },
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