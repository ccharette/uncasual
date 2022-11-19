<template>
  <div class="px-6 py-2 flex item-center">
    <button @click="sort()" type="button">
      <p class="my-auto text-base">{{ title }}</p>
    </button>
    <span v-if="sortBy" class="flex justify-between ml-2 bg-yellow-400 px-2 py-1 rounded-full">
      <button @click="sort()" type="button">
        <i :class="{'fi-rr-angle-small-down': this.sortBy === 'asc', 'fi-rr-angle-small-up': this.sortBy === 'desc'}" class="fi mr-2 text-white"></i>
      </button>
      <button @click="clear()" type="button">
        <i  class="fi fi-sr-cross-circle text-white"></i>
      </button>
    </span>
  </div>

</template>

<script>
export default {
  name: "SortByButton",
  props: {
    title: {
      type: String,
      required: true
    },
    defaultSortBy: {
      type: String,
      validator (value) {
        return ['asc', 'desc'].include(value);
      }
    },
  },
  data () {
    return {
      sortBy: null
    };
  },
  mounted() {
    if (this.defaultSortBy) {
      this.sortBy = this.defaultSortBy;
    }
  },
  methods: {
    sort () {
      switch (this.sortBy) {
        case 'asc':
          this.sortBy = 'desc';
          break;
        case 'desc':
          this.sortBy = 'asc';
          break;
        default:
          this.sortBy = 'asc';
      }
      return this.triggerEvent();
    },
    clear () {
      this.sortBy = null;
      return this.triggerEvent();
    },
    triggerEvent () {
      return this.$emit('sort-by', this.sortBy);
    }
  }
}
</script>

<style scoped>

</style>