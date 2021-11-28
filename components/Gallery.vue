<template>
  <div class='container'>
    <div class='gallery'>
      <div class='grid grid-cols-12 gap-y-8 md:gap-x-8 mb-8'>
        <div
          v-for='(item, index) in items'
          :key='index'
          class='col-span-12'
          :class='(index % 6 === 0 || index % 6 === 5) ? "md:col-span-6" : "md:col-span-3"'
        >
          <Card :item='item' :bg='images[index]'/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    },
    images: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

