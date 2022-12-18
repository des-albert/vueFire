<template>
  <nav
    class="navbar is-success"
    aria-label="main navigation"
    role="navigation"
  >
  <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">
          dgmsotc
        </div>
      </div>
      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showMobileNav }" ref="navbarMenuRef">  
        <div class="navbar-end">
          <RouterLink class="navbar-item" to="/">
            Home
          </RouterLink>

          <RouterLink class="navbar-item" to="/addPost">
            add Post
          </RouterLink>
        </div>
      </div>
    </div>         

  </nav>
</template>

<script setup>
  import { ref } from 'vue'

  const showMobileNav = ref(false)
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>