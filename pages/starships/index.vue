<template>
  <div class="container-fluid cont-ships">
    <div class="ship-render" v-for="(ship, index) in ships" :key="index" :id="ship.name">
      <nuxt-link :to="'/starships/' + ship.name">
        <p class="name-ship">{{ship.name}}</p>
        <p>{{ship.model}}</p>
      </nuxt-link>
    </div>
    <LoadMoreShips/>
  </div>
</template>

<script scoped>
import LoadMoreShips from '@/components/LoadMoreShips'
export default {
    layout: 'website',
    name: 'starships',
    auth: false,
    components: {
       LoadMoreShips,
    },
    beforeMount(){
      if(localStorage.getItem("auth.user.auth")==null){
        console.log("USER CAN NOT PASS");
        this.$router.push('/login')
      } else {
        this.$auth.loggedIn
        this.$router.push('/starships')
      }
    },
    created() {  
      window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
         if (bottomOfWindow===true) {
           this.moreShips()
           }
        }
    },
    computed: {
      ships(){
        return this.$store.getters['ships/getShips']
      }
    }, 
    methods: {
      moreShips(){
    this.$store.dispatch('ships/loadMoreShips')
      }
    },
    updated(){
       this.$store.dispatch('ships/loadMorePilots')
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