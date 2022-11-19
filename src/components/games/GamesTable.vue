<template>
  <v-table class="game-table">
    <thead class="font-weight-bold text-subtitle-1">
      <tr>
        <th class="p-3">Name</th>
        <th class="p-3">Status</th>
        <th class="p-3">Created at</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(game, index) in games" class="my-3 border border-gray-300 hover:bg-gray-100 hover:bg-opacity-60">
        <td><RouterLink :to="{ name: 'game', params: {id: game.id} }" class="p-3">{{ game.name }}</RouterLink></td>
        <td class="p-3"><GameStatusBadge :status="game.status"></GameStatusBadge></td>
        <td class="p-3">{{ game.created_at }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
import GameStatusBadge from "./GameStatusBadge.vue";
import Ranking from "../elements/Ranking.vue";
import SortByButton from "../elements/buttons/SortByButton.vue";
import { useGames } from "../../store/games";
import { RouterLink } from "vue-router";

export default {
  name: "GamesTable",
  setup() {
    const gamesStore = useGames()

    return {
      gamesStore,
    }
  },
  components: {
    SortByButton,
    Ranking,
    GameStatusBadge,
    RouterLink
  },
  data () {
    return {

    };
  },
  computed: {
    games () {
      return this.gamesStore.games;
    }
  },
  created() {
    //
  },
  methods: {
    //
  }
}
</script>

<style scoped>
.game-table {
  background-color: black;
  opacity: 80%;
  border-radius: 10px;
}
</style>