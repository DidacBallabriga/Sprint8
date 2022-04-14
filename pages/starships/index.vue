<template>
  <div class="container-fluid cont-ships">
    
    <div class="ship-render" v-for="(ship, index) in ships.results" :key="index" :id="ship.name">
      <nuxt-link :to="'/starships/' + ship.name">
        <p class="name-ship">{{ship.name}}</p>
        <p>{{ship.model}}</p>
      </nuxt-link>
    </div>
     
  </div>
</template>

<script>
import StarShipDetail from '@/components/StarShipDetail'
export default {
    layout: 'website',
    name: 'starships',
    components: {
      StarShipDetail
    },
    computed: {
      ships(){
        return this.$store.getters['ships/getShips']
      }
    }   
}
</script>

<style scoped>
.cont-ships{
    display: flex;
    padding: 2rem;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    align-items: center;
    flex-direction: column;
}
.ship-render{
  padding: 1rem;
  width: 70%;
  background-color: #151515;
  margin-bottom: 1rem;
  color: rgb(143, 140, 140);
  border-radius: 5px;
}
a{
  color: rgb(143, 140, 140);
  text-decoration: none;
}
.name-ship{
  font-weight: 700;
}
p{
  margin-bottom: 0;
}

</style>