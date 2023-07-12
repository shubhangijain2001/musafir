<template>
    <nav>
     <h1>MUSAFIR- The Travel Log</h1>
</nav>
     
   
   </template>
   
   <script>
   export default {
     name: 'navBar',
   }
   </script>
   
   <style scoped>
nav {
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
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