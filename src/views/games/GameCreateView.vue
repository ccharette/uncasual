<template>
<div>
  <TextInput v-model="name"></TextInput>
</div>
</template>

<script>
import TextInput from "../../components/elements/inputs/TextInput.vue";

export default {
  name: "GameCreateView",
  components: {TextInput},
  data () {
    return {
      name: '',
    }
  }
}
</script>

<style scoped>

</style>