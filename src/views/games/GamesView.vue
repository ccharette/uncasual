<script>
import { useGames } from "@/store/games.js";

import GamesTable from "@/components/games/GamesTable.vue";

export default {
  name: "GamesView",
  components: {
    GamesTable
  },
  setup() {
    const gamesStore = useGames()

    return {
      gamesStore,
    }
  },
  data () {
    return {
      //
    };
  },
  computed: {
    games () {
      return this.gamesStore.games;
    }
  },
  created () {
    this.gamesStore.getGames();
    this.fetchApi();
  },
  methods: {
    fetchApi () {

    }
  }
}
</script>

<template>
<!--  <GamesMetrics></GamesMetrics>-->
<v-container>
  <GamesTable></GamesTable>
</v-container>
</template>


<style scoped>

</style>