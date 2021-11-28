<template>
  <div>
    <Hero
      :tag='$route ? $route.query.country : "Country"'
      :title='$route ? $route.query.capital : "Capital"'
      :bg='$route ? $route.query.bg : ""'/>
    <div class='container'>
      <div class='max-w-screen-md mx-auto text-center'>
        <p class='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna risus, eleifend quis diam convallis, venenatis tincidunt dui. Etiam varius lorem sit amet maximus venenatis. Morbi accumsan lacus eget iaculis pulvinar. Nulla blandit risus a pellentesque suscipit. Donec consequat tincidunt scelerisque. Donec sit amet sem tortor. Pellentesque nec semper sapien.</p>
        <p class='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna risus, eleifend quis diam convallis, venenatis tincidunt dui. Etiam varius lorem sit amet maximus venenatis. Morbi accumsan lacus eget iaculis pulvinar. Nulla blandit risus a pellentesque suscipit. Donec consequat tincidunt scelerisque. Donec sit amet sem tortor. Pellentesque nec semper sapien.</p>
        <p class='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna risus, eleifend quis diam convallis, venenatis tincidunt dui. Etiam varius lorem sit amet maximus venenatis. Morbi accumsan lacus eget iaculis pulvinar. Nulla blandit risus a pellentesque suscipit. Donec consequat tincidunt scelerisque. Donec sit amet sem tortor. Pellentesque nec semper sapien.</p>
        <NuxtLink to='/' class='btn btn-dark'>Back</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  head: {
    title: 'Details page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Detailed page for specific countries'
      }
    ],
  }
}
</script>
