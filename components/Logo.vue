<template>
<div>
  <router-link to="/">
  <img class="logo" src="@/static/Star-Wars-emblema-logo.jpg" alt="Star Wars Logo">
  </router-link>
</div>
</template>

<script>
export default {
    name: 'Logo'
}
</script>

<style scoped>
.logo{
    width: 250px;
    height: 150px;
}
@media (max-width: 767px){
  .logo{
    width: 150px;
    height: 75px;
  }
}

</style>