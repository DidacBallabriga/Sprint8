<template>
<div class="container-fluid detailShip">
  <div v-if="pilots[propId]!==0">
    <div v-for="(pilot, index) in pilots[propId]" :key="index" >
           <ul>
               <li>{{pilot.name}} is the driver of the {{$route.params.id}} ship.</li> 
           </ul> 
    </div>
    </div>
  <div v-else>The pilots of the {{$route.params.id}} ship are unknown.</div>  
</div>
</template>

<script>
export default {
    name: 'Pilots',
    layout: 'website',
    props: ["propId"],
    auth: false,
        beforeMount(){
        if(localStorage.getItem("auth.user.auth")==null){
        console.log("USER CAN NOT PASS");
        this.$router.push('/login')
      } 
    },
    computed: {
      pilots(){
        return this.$store.getters['ships/getPilots']
      }
    },
}
</script>

<style scoped>
.detailShip {
  background-color: black;
  padding: 1rem;
  margin-bottom: 1rem;
  color: rgb(143, 140, 140);
  text-align: center;
}
@media (max-width: 600px){
  .detailShip {
    text-align: left;
  }
}
li {
  list-style:none;
}
h1{
  text-align: center;
}
.text{
  text-align: left;
  margin-top: 2rem;
  margin-left: 0.5rem;
}
.image{
  width: 100%;
  text-align: center;
}
img{
  width: 50%;
}
@media (max-width: 767px){
  img{
    width: 80%;
  }
}
</style>