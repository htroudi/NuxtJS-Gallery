<template>
  <div class='about'>
    <div class='container'>
      <h2>Notes</h2>
      <ul>
        <li>
          <span>Added REST Api for Cities and Capitals</span>
        </li>
        <li>
          <span>Used Nuxt for SSR and mainly SEO</span>
        </li>
        <li>
          <span>Added some animations for the hover state</span>
        </li>
        <li>
          <span>Added a detail page for the selected card</span>
        </li>
        <li>
          <span>Persisted data in store to be able to go back to it after visiting the details page</span>
        </li>
        <li>
          <span>Tried to make very basic tests for the components created</span>
        </li>
      </ul>
      <p></p>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  head: {
    title: 'About page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Description of the work done'
      }
    ],
  }
}
</script>
