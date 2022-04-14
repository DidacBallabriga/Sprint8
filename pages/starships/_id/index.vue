<template>
<div class="container-fluid detailShip">
  <h1>{{$route.params.id}}</h1>
  <div class="row" v-for="(ship, index) in ships.results" :key="index" v-if="$route.params.id === ship.name">
    <div class="image">
      <img :src="'https://starwars-visualguide.com/assets/img/starships/'+ ship.url.replace(/\D+/g, '')+'.jpg'" alt="">
    <p class="text">Here you can see all details about {{$route.params.id}} starship:</p>
    </div>
       <div class="col-lg-6">
           <ul>
               <li>Model: {{ship.model}}</li>
               <li>Cost in credits: {{ship.cost_in_credits}} </li>
               <li>Atmospheric Speed: {{ship.max_atmosphering_speed}} </li>
            </ul> 
        </div>
        <div class="col-lg-6">
           <ul>
               <li>Manufacturer: {{ship.manufacturer}} </li>
               <li>Length: {{ship.length}} </li>
               <li>Crew: {{ship.crew}} </li>
            </ul> 
        </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'starshipDetail',
    layout: 'website',
    computed: {
      ships(){
        return this.$store.getters['ships/getShips']
      }
    }
}
</script>

<style scoped>
.detailShip{
  background-color: black;
  padding: 1rem;
  margin-bottom: 1rem;
  color: rgb(143, 140, 140);
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