<template>
  <v-container>
    <v-row-12 v-for="serie in series" class="mt-12">
      <v-col-12>
        <RouterLink :to="`/series/${serie.id}`">
          <h3 class="pl-10 py-6 text-h4">{{ serie.name }}</h3>
        </RouterLink>
      </v-col-12>
      <v-col-12>
        <SeriesSlider :serie="serie"></SeriesSlider>
      </v-col-12>
    </v-row-12>
  </v-container>
</template>

<script>
import Glide from '@glidejs/glide';
import { useSeries } from "../../store/series.js";
import SeriesSlider from "../../components/series/SeriesSlider.vue";

export default {
  name: "SeriesView",
  setup() {
    const seriesStore = useSeries()

    return {
      seriesStore,
    }
  },
  components: {
    SeriesSlider

  },
  computed: {
    series () {
      return this.seriesStore.series;
    }
  },
  mounted () {
    this.seriesStore.getSeries();
  }
}
</script>

<style lang="scss" scoped>
// Required Core Stylesheet
@import "node_modules/@glidejs/glide/src/assets/sass/glide.core";

// Optional Theme Stylesheet
@import "node_modules/@glidejs/glide/src/assets/sass/glide.theme";
</style>