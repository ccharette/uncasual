<template>
  <v-col-12>
    <div :id="`glide-${serie.id}`" :class="`glide`">
      <div :class="`glide__track`" data-glide-el="track">
        <ul :class="`glide__slides`">
          <li v-for="game in serie.games" :class="`glide__slide`">
            <RouterLink :to="`/games/${game.id}`">
              <div class="slide">
                <img src="https://via.placeholder.com/250?text=slide1" class="image"/>
                <div class="cover">{{ game.name }}</div>
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div :class="`glide__arrows`" data-glide-el="controls">
        <button :class="`glide__arrow glide__arrow--left`" data-glide-dir="<">prev</button>
        <button :class="`glide__arrow glide__arrow--right`" data-glide-dir=">">next</button>
      </div>
    </div>
  </v-col-12>
</template>

<script>
import Glide from '@glidejs/glide';

export default {
  name: "SeriesSlider",
  props: {
    serie: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      //
    };
  },
  mounted() {
    this.initialiseSlider();
  },
  methods: {
    initialiseSlider() {
      new Glide(`#glide-${this.serie.id}`, {
        type: 'slider',
        startAt: 0,
        perView: 3,
        focusAt: 0.15,
        breakpoints: {
          //
        },
        classes: {
          direction: {
            ltr: `glide__arrow--left`,
            rtl: `glide__arrow--right`
          },
          slider: `glide__slide`,
        }
      }).mount();
    }
  }
}
</script>

<style lang="scss" scoped>
// Required Core Stylesheet
@import "node_modules/@glidejs/glide/src/assets/sass/glide.core";

// Optional Theme Stylesheet
@import "node_modules/@glidejs/glide/src/assets/sass/glide.theme";

.image {
  border-radius: 10px;
}
.slide {
  position: relative;
  width: 250px;
  height: 250px;
  &:hover {
    .cover {
      position: absolute;
      background-color: black;
      opacity: 75%;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }

  }
}
</style>