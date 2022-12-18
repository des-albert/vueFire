<template>
  <Carousel 
    v-slot="{ currentSlide }" 
    timeout="5000"
  >
    <Slide v-for="(post, index) in storePosts.posts" :key="index">
      <div v-show="currentSlide === index + 1">
        <Post :post="post" />
      </div>
    </Slide>

  </Carousel>

</template> 

<script setup>

  import Carousel from '@/components/Carousel/Carousel.vue'
  import Slide from '@/components/Carousel/Slide.vue'

  import Post from  '@/components/Posts/Post.vue'

  import { useStorePosts } from '@/stores/storePosts'

  const storePosts = useStorePosts()

</script>
