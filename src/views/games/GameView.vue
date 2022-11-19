<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn @click="$router.go(-1)">Back</v-btn>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col>
        <h4 class="text-h1">{{ game.name }}</h4>
      </v-col>
      <v-col>
        <v-btn class="justify-end"></v-btn>
      </v-col>
    </v-row>
  </v-container>
<!--  <div class="h-full w-full absolute">-->
<!--    &lt;!&ndash; Page title starts &ndash;&gt;-->
<!--    <div class="my-6 lg:my-12 container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4 border-b border-gray-300">-->
<!--      <div>-->
<!--      </div>-->
<!--      <div class="mt-6 lg:mt-0">-->
<!--        <RouterLink :to="'/games'">-->
<!--          <button class="mx-2 my-2 bg-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white hover:bg-gray-100 rounded text-indigo-700 px-6 py-2 text-sm">Back</button>-->
<!--        </RouterLink>-->
<!--        <button class="transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 border bg-indigo-700 rounded text-white px-8 py-2 text-sm">Edit Profile</button>-->
<!--      </div>-->
<!--    </div>-->
<!--    &lt;!&ndash; Page title ends &ndash;&gt;-->
<!--    <div class="container mx-auto px-6">-->
<!--      &lt;!&ndash; Remove class [ h-64 ] when adding a card block &ndash;&gt;-->
<!--      &lt;!&ndash; Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border &ndash;&gt;-->
<!--      <div class="w-full h-64 grid grid-cols-4 gap-4">-->
<!--        <div>-->
<!--          <label><p class="mb-4">Status</p></label>-->
<!--          <GameStatusBadge :status="game.status"></GameStatusBadge>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
import { useGames } from "../../store/games";
import GameStatusBadge from "../../components/games/GameStatusBadge.vue";
import Ranking from "../../components/elements/Ranking.vue";

export default {
  name: "GameView",
  components: {
    Ranking,
    GameStatusBadge
  },
  setup() {
    const gamesStore = useGames()

    return {
      gamesStore,
    }
  },
  computed: {
    game () {
      return this.gamesStore.games.find(game => game.id == this.$route.params.id);
    }
  }
}
</script>

<style scoped>

</style>