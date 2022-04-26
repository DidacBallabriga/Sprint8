<template>
  <div class="container-sm m-lg-5">
      <b-form>
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="*We'll never share your email with anyone else.">
        <b-form-input id="input-1" v-model="loginInfo.email" type="email" placeholder="Enter email" required ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Your Password:" label-for="input-2" description="*We'll never share your password with anyone else.">
        <b-form-input id="input-2" v-model="loginInfo.password" type="password" placeholder="Enter Password"
          required></b-form-input>
      </b-form-group>
      <b-button @click="loginUser">Login</b-button>
      </b-form>
  </div>
</template>

<script>
  export default {
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

<style>

</style>