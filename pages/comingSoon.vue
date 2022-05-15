<template>
  <div class="container-fluid">
      <h1>Coming Soon...</h1>
      <h2>We are working in this section</h2>
      <button class="my-button"><NuxtLink active-class="active" class="nuxt-link-1 p-3" to="/home">COME BACK</NuxtLink></button>
  </div>
</template>

<script>
export default {
    layout: 'website',
    name: 'comingSoon',
    auth: false
}
</script>

<style scoped>
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
.container-fluid{
    text-align: center;
}

</style>