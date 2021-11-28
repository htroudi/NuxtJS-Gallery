<template>
  <div>
    <Hero :tag='"Front-end"' :title='"Valtech_"'/>
    <Gallery :items='capitals' :images='images'/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { transformArray } from '~/logic/dataTransformer/capitals'

export default Vue.extend({
  async asyncData({ $axios, store }) {
    if(!store.getters.getCapitals.length) {
      let response = await $axios.$get(`/countries/capital`)
      response = transformArray(response?.data)
      store.commit('setCapitals', response)
    }
  },
  computed: {
    capitals () {
      return this.$store.state.capitals
    },
    images () {
      return this.$store.state.images
    }
  },
})
</script>
