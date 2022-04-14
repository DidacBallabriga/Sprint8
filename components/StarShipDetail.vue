<template>
<div class="container-fluid">
    <p>{{$route.params}}</p>
  <img src="" alt="">
  <h1>nave</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo soluta iusto consequuntur commodi laboriosam blanditiis quam maiores esse quia, porro modi eos delectus, explicabo, natus eum ratione numquam? Nam, et!</p>
  <div class="row">
       <div class="col-6">
           <ul>
               <li>Lorem</li>
               <li>Lorem</li>
               <li>Lorem</li>
            </ul> 
        </div>
        <div class="col-6">
           <ul>
               <li>Lorem</li>
               <li>Lorem</li>
               <li>Lorem</li>
            </ul> 
        </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'starshipDetail',
    layout: 'website'
}
</script>

<style scoped>
.container-fluid{
    background-color: black;
    color: aliceblue;
}


</style>
