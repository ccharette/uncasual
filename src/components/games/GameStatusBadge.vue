<template>
  <Badge :color="statusColor" :title="status"></Badge>
</template>

<script>
import { useGames, gameStatus } from "../../store/games.js";

import Badge from "../elements/Badge.vue";

export default {
  name: "GameStatusBadge",
  components: {
    Badge,
  },
  setup() {
    const gamesStore = useGames()

    return {
      gamesStore,
    }
  },
  props: {
    status: {
      type: String,
      required: true,
      validator (value) {
        return [gameStatus.not_started, gameStatus.in_progress, gameStatus.finished, gameStatus.unfinished].includes(value);
      }
    }
  },
  computed: {
    statusColor () {
      switch(this.status) {
        case gameStatus.not_started:
          return 'gray';
         case gameStatus.in_progress:
          return 'blue';
         case gameStatus.finished:
          return 'green';
         case gameStatus.unfinished:
          return 'yellow';
        default:
          return 'gray';
      }
    }
  }
}
</script>

<style scoped>

</style>