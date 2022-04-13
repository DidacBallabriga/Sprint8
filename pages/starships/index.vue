<template>
  <div class="container-fluid cont-ships">
    <div class="ship-render" v-for="result in results" :key="result.name">
      <p class="name-ship">{{result.name.toUpperCase()}}</p>
      <p>{{result.model}}</p>
    </div>
  </div>
</template>

<script>
export default {
    layout: 'website',
    name: 'starships',

    asyncData(context){
      return new Promise((resolve, reject)=>{
         fetch('https://swapi.dev/api/starships/')
          .then(response => response.json())
          .then(json => resolve(json));
      }).then(json =>{
        console.log("micasa", json);
        return json;
      })
    },
    created() {
      console.log(this.results[1].name);
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
.name-ship{
  font-weight: 700;
}
p{
  margin-bottom: 0;
}

</style>