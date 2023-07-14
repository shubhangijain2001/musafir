<template>
    <nav>
     <h1 class="musafir" @click="landPage">Musafir</h1>
     <div class="nav-left">
      <ul>
        <li><router-link to="/products">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><a v-on:click="logout " href="/signup">Logout</a></li>
      </ul>
    </div>
</nav>
     
   
   </template>
   
   <script>
   export default {
     name: 'navBar',
     methods:{
        landPage(){
            this.$router.push({name:'firstPage'})
        }
     }
   }
   </script>
   
   <style scoped>
   

  @import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');


nav {
  /* background-color:#131212; */
  background-color: #272932;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
}

.musafir{
  
  font-family: 'Satisfy', cursive;
  font-size: 40px;
  margin: .5%;
  padding: 0;
}
.nav-left ul,
.nav-right form {
  display: flex;
  align-items: center;
  margin-top: 25px;
}

ul {
  display: flex;
  list-style: none;
  margin: 0;
  
  padding: 0;
}

li {
  margin-left: 1rem;
  font-size:16px;
}

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

input[type="text"] {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: none;
}

button[type="submit"] {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #130101;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  margin-left: 0.5rem;
}
</style>