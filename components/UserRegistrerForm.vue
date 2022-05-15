<template>
  <div class="container-sm m-lg-5 my-container">
        <!-- EMAIL -->
      <form class="ui form" @submit.prevent="registrerUser">
        <div class="field">
          <div class="ui left icon input big">
            <b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="*We'll never share your email with anyone else.">
              <b-form-input type="email" placeholder="Enter email" v-model="registrerInfo.email" />
            </b-form-group>
          </div>
        </div>
          <!-- PASSWORD -->
        <div class="field">
          <div class="ui left icon input big">
            <b-form-group id="input-group-2" label="Your Password:" label-for="input-2" description="*We'll never share your password with anyone else.">
              <b-form-input type="password" placeholder="Enter Password" v-model="registrerInfo.password" />
            </b-form-group>
          </div>
        </div>
          <!-- BUTTON -->
        <b-button class="ui button big red fluid" @click.prevent="registrerUser">Sign up</b-button>
            <!-- ERRORS -->
      <div class="container-sm m-lg-5 error">
        <div class="ui message red big" v-show="errors.length > 0">
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </div>
      </div>
      </form>
  </div>
  
</template>


<script>
  export default {
    name: 'UserRegistrerForm',
    data() {
      return {
        errors: [],
        registrerInfo: {
          email: '',
          password: '',
        }
      }
    },
    methods: {
      validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
      },
      registrerUser(){
        this.errors = []
        if (this.registrerInfo.email == "") {
              this.errors.push("Email is empty");
          } else {
            if (!this.validEmail(this.registrerInfo.email)) {
              this.errors.push("Invalid Email")
            }
          }
        if (this.registrerInfo.password == "") {
              this.errors.push("Password is empty");
          } else {
            if (this.registrerInfo.password.length < 8) {
              this.errors.push("Password must be 8 characters long");
            }
          } 
      if(this.errors.length===0){
          this.$store.dispatch('registrerUser', this.registrerInfo)
      }
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