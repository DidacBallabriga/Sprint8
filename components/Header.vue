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
          <div v-if="this.isAutenticated==false">
            <p>Registred as:<br>{{emailUser}}</p> 
            <NuxtLink @click.native="logout" to="/">// LOG OUT</NuxtLink>
          </div>
          <div v-else>
          <b-navbar-nav>
            <b-nav-item><NuxtLink to="/login">LOG IN</NuxtLink></b-nav-item>
            <span class="double-bar">//</span>
            <b-nav-item><NuxtLink to="/registrer">SIGN UP</NuxtLink></b-nav-item>
          </b-navbar-nav>
          </div>
        </b-collapse>
    </b-navbar>
      <div class="container-fluid d-flex justify-content-center align-content-center div-nuxt-link">
        <NuxtLink active-class="active" class="nuxt-link-1 p-3" to="/home">HOME</NuxtLink>
        <NuxtLink active-class="active" class="nuxt-link-2 p-3" to="/starships">STARSHIPS</NuxtLink>
      </div>  
  </div>
</template>

<script>
import Logo from './Logo.vue'
export default {
  name: 'Header',
  emailUser: "",
  isAutenticated: true,
  components: {
    Logo
  },
  beforeMount(){
     if(localStorage.getItem("auth.user.auth")!==null){
        this.emailUser = JSON.parse(localStorage.getItem("auth.user.auth")).email
        this.isAutenticated = false
      }
  },
  methods: {
    logout: function(){
        window.localStorage.removeItem("auth.user.auth")
        this.$store.dispatch('logout')
        this.$router.push('/')
    }
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
    font-weight: 500;
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
  font-size: 1.2rem;
  font-weight: 500;
  border-top: 1px solid rgb(143, 140, 140);
  border-bottom: 1px solid rgb(143, 140, 140);
}
.nuxt-link-1{
  border-left: 1px solid rgb(143, 140, 140);
  border-right: 1px solid rgb(143, 140, 140);
}
.nuxt-link-1:hover{
  text-decoration: none;
  color: #ffffff;
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue, 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue, 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue,1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue,1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue,1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
}
.nuxt-link-2:hover{
  text-decoration: none;
  color: #ffffff;
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue, 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue, 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue,1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue,1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue,1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
}
.nuxt-link-2{
  border-right: 1px solid rgb(143, 140, 140);
}
.myclass{
  width: 155px;
}
.active{
   border-bottom: 2px solid blue;
   cursor: pointer;
 }


</style>