<template>
  <div class="w-full flex justify-around">
    <i :class="ranking >= 1 ? 'fi fi-sr-star' : 'fi fi-rr-star'"></i>
    <i :class="ranking >= 2 ? 'fi fi-sr-star' : 'fi fi-rr-star'"></i>
    <i :class="ranking >= 3 ? 'fi fi-sr-star' : 'fi fi-rr-star'"></i>
    <i :class="ranking >= 4 ? 'fi fi-sr-star' : 'fi fi-rr-star'"></i>
    <i :class="ranking >= 5 ? 'fi fi-sr-star' : 'fi fi-rr-star'"></i>
  </div>
</template>

<script>
export default {
  name: "Ranking",
  props: {
    ranking: {
      type: Number,
      validator (value) {
        return value <= 5 && value >= 0;
      }
    }
  }
}
</script>

<style scoped>

</style>