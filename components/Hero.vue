<template>
  <div class='container'>
    <div class='hero' :style='{backgroundImage: "url(" + bg + ")" }'>
      <div class='overlay'>
        <div class='tag'>{{ tag ? tag : "Front-end" }}</div>
        <div class='title'>{{ title ? title: "Valtech_" }}</div>
        <div class='description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  props: {
    tag: {
      type: String,
      required: true,
      default: () => 'Hero tag'
    },
    title: {
      type: String,
      required: true,
      default: () => 'Hero Title'
    },
    bg: {
      type: String,
      required: false,
      default: () => '/hero.jpg'
    }
  }
}
</script>
