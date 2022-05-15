<template>
    <div class="infinite-container">
      <div><span>.</span></div>
      <client-only>
      <InfiniteLoading v-if="ships!== 5" spinner="bubbles"></InfiniteLoading>
      </client-only>
    </div>
</template>

<script scoped>
import InfiniteLoading from 'vue-infinite-loading';
export default {
    name: 'LoadMoreShips',
    components: {
      InfiniteLoading,
    },
    computed: {
      ships(){
        return this.$store.getters['ships/getNumber']
      }
    },
}
</script>

<style scoped>
span{
  color: black;
}
.load-more{
  padding: 1rem;
  width: 20%;
  background-color: #151515;
  margin-bottom: 1rem;
  color: rgb(143, 140, 140);
  border-radius: 5px;
  font-weight: 700;
  font-size: 1.3rem;
}
.load-more:hover{
  background-color: #15151570;
  color: white;
}
</style>