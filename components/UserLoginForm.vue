<template>
  <div class="container-sm m-lg-5 my-container">
        <!-- EMAIL -->
      <form class="ui form">
        <div class="field">
          <div class="ui left icon input big">
            <b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="*We'll never share your email with anyone else.">
              <b-form-input type="email" placeholder="Enter email" v-model="loginInfo.email" />
            </b-form-group>
          </div>
        </div>
          <!-- PASSWORD -->
        <div class="field">
          <div class="ui left icon input big">
            <b-form-group id="input-group-2" label="Your Password:" label-for="input-2" description="*We'll never share your password with anyone else.">
              <b-form-input type="password" placeholder="Enter Password" v-model="loginInfo.password" />
            </b-form-group>
          </div>
        </div>
          <!-- BUTTON -->
        <b-button class="ui button big red fluid" @click="loginUser">Login</b-button>
      </form>
  </div>
  
</template>


<script>
  export default {
    name: 'UserLoginForm',
    data() {
      return {
        loginInfo: {
          email: '',
          password: '',
        }
      }
    },
     methods: {
      async loginUser(){
        console.log("email: " + this.loginInfo.email);
        console.log("password: " + this.loginInfo.password);
        this.$store.dispatch('loginUser', this.loginInfo)
      }
    }
  }

</script>

<style scoped>
.error{
  color: yellow
}
.my-container{
  padding: 0 1rem;
  margin: 1rem;
  color: white;
}
form{
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 720px){
  form{
    width: 100%;
  }
}

</style>