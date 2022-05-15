<template>
    <div class="container-fluid">
       <h1>-May the Force be with you-</h1>
        <NuxtLink active-class="active" class="nuxt-link-1 p-3" to="/comingSoon"><img src="@/assets/maxRebo.png" alt=""></NuxtLink>
        <NuxtLink active-class="active" class="nuxt-link-1 p-3" to="/comingSoon"><img src="@/assets/PowerOfTheGalaxy.png" alt=""></NuxtLink>
        <NuxtLink active-class="active" class="nuxt-link-1 p-3" to="/comingSoon"><img src="@/assets/starWarsMerchandise.png" alt=""></NuxtLink>
        <NuxtLink active-class="active" class="nuxt-link-1 p-3" to="/comingSoon"><img src="@/assets/legoStarWars.png" alt=""></NuxtLink>
    </div>
</template>

<script>
export default {
  layout: 'website',
  name: 'home',
  auth: false
}
</script>

<style scoped>
.container-fluid{
  text-align: center;
}
img{
  margin-bottom: 3rem;
}

</style>