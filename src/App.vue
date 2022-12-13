<template>
  <NavBar />
  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>
</template>
<script setup>

  import { onMounted } from 'vue'
  import NavBar from '@/components/Layout/NavBar.vue'
  import { useStorePosts } from '@/stores/storePosts'


  const storePosts = useStorePosts()

  onMounted(() => {
    storePosts.getPosts()
  })

</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>
