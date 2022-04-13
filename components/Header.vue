<template>
  <div class="container-fluid">
    <b-navbar id="navbar" toggleable="md">
      <div class="myclass"></div>
        <b-navbar-brand class="d-md-none">
          <Logo />
        </b-navbar-brand>
      <b-navbar-toggle target="collapse-area"></b-navbar-toggle>
        <b-collapse id="collapse-area" is-nav>
          <b-navbar-nav class="d-none d-md-block mx-auto">
            <b-nav-text>
              <Logo />
            </b-nav-text>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item><NuxtLink to="/home">LOG IN</NuxtLink></b-nav-item>
            <span class="double-bar">//</span>
            <b-nav-item><NuxtLink to="/starships">SING UP</NuxtLink></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
    </b-navbar>
      <div class="container-fluid d-flex justify-content-center align-content-center div-nuxt-link">
        <NuxtLink class="nuxt-link-1 p-2" to="/home">HOME</NuxtLink>
        <NuxtLink class="nuxt-link-2 p-2" to="/starships">STARSHIPS</NuxtLink>
      </div>  
  </div>
</template>

<script>
import Logo from './Logo.vue'
export default {
  name: 'Header',
  components: {
    Logo
  }
}
</script>

<style scoped>
.container-fluid{
  background-color: black;
}
.nav-link {
    display: block;
    padding: 0rem 0rem;
}
a, span{
  color: rgb(143, 140, 140);
}
@media (max-width: 767px){
  .double-bar{
    display: none;
  }
  .myclass{
    display: none;
  }
}
.navbar-light {
    color: rgb(143, 140, 140);
    border-color: rgb(143, 140, 140);
}
.navbar-toggler {
    background-color: #ffffff;
}
.div-nuxt-link{
  border-top: 1px solid rgb(143, 140, 140);
  border-bottom: 1px solid rgb(143, 140, 140);
}
.nuxt-link-1{
  border-left: 1px solid rgb(143, 140, 140);
  border-right: 1px solid rgb(143, 140, 140);
}
.nuxt-link-2{
  border-right: 1px solid rgb(143, 140, 140);
}
.myclass{
  width: 155px;
}


</style>