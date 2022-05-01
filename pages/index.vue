<template>
  <div class="container-fluid">
    <h1>-WELCOME TO STAR WARS NOT OFFICIAL PAGE-</h1>
    <div class="container-fluid my-buttons">
      <button class="my-button"><NuxtLink active-class="active" class="nuxt-link-1 p-3" to="/home">ENTER</NuxtLink></button>
      <button class="my-button"><NuxtLink active-class="active" class="nuxt-link-1 p-3" to="/starships">STARSHIPS</NuxtLink></button>
    </div>
    <h5>Create a local account to view the full website or use these credentials:<br><b>Email:</b> admin@nuxtjs.com <b>Password:</b> password </h5>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  layout: 'welcome',
  auth: false
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
body{
  font-family: 'Montserrat', sans-serif;
  background-color: black;
}
h1{
  margin: 2rem;
  text-align: center;
  color: rgb(255, 228, 0);
}
h5{
  margin: 2rem;
  text-align: center;
  color:rgb(143, 140, 140);
}
.my-buttons{
  text-align: center;
}
.my-button{
  height: 5rem;
  width: 12rem;
  text-decoration: none;
  background-color:  rgb(0, 0, 0);
  border: 2px solid rgb(143, 140, 140);
  color:rgb(143, 140, 140);
  border-radius: 1rem;
  margin: 2rem;
}
button a{
  color:rgb(143, 140, 140);
  font-size: 1.4rem;
  font-weight: 500;
}

button a:hover{
  text-decoration: none;
  color: #ffffff;
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue, 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue, 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue,1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue,1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue,1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
}
@media (max-width: 767px){
  h1{
  margin: 1rem;
  }
  .my-button{
    margin: 1rem;
  }
}
</style>
