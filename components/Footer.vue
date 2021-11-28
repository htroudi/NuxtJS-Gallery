<template>
  <div class='footer'>
    <div class='container'>
      <div class='about'>
        <span>Front-end technical test by: Houssem Troudi</span>
        <NuxtLink
          :to='$route ? $route.name === "About" ? "/" : "/about" : "/about"'
          class='btn btn-dark'
        >
          {{ $route ? $route.name === "About" ? "Home" : "About" : "About" }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
