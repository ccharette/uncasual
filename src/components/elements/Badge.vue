<template>
  <v-chip :color="color">
    {{ title }}
  </v-chip>
</template>

<script>
export default {
  name: "Badge",
  props: {
    color: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
  },
}
</script>

<style scoped>

</style>