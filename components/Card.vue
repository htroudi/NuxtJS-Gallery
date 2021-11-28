<template>
  <div class='card' :style='{backgroundImage: "url(" + bg + ")" }'>
    <div class='overlay'>
      <div class='title'>
        <div class='country'>{{ item ? item.name : 'Country'}}</div>
        <div class='city'>{{ item ? item.capital : 'Capital' }}</div>
      </div>
      <div class='description'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <NuxtLink
          :to='{
            path: "/details",
            query: {
              country: item ? item.name : "Country",
              capital: item ? item.capital : "Capital",
              bg: bg
            }
          }'
          class='btn btn-transparent'
        >
          Explore More
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {}
    },
    bg: {
      type: String,
      required: true,
      default: () => ''
    }
  }
}
</script>
