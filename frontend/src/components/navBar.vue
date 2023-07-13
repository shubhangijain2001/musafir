<template>
    <nav>
     <h1 class="musafir">Musafir</h1>
     <div class="nav-left">
      <ul>
        <li><router-link to="/signup">Sign Up</router-link></li>
        <li><router-link to="/login">Log in</router-link></li>
      </ul>
    </div>
</nav>
     
   
   </template>
   
   <script>
   export default {
     name: 'navBar'

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

.menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-left: 1rem;
  font-size:18px;
  
}

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
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