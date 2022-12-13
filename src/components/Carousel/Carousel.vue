<template>
  <div class="carousel">
      <button @click="prevSlide" class="button is-info"><i class="fas fa-chevron-left"></i></button>  
        <slot :currentSlide="currentSlide" /> 
      <button @click="nextSlide" class="button is-info"><i class="fas fa-chevron-right"></i></button> 
  </div>

</template>


<script setup>

  import { ref, onMounted } from 'vue'
  import { useStorePosts } from '@/stores/storePosts'

  const storePosts = useStorePosts()
  
  const currentSlide = ref(1)
  const slideCount = ref(null)

  const nextSlide = () => {
    if(currentSlide.value === slideCount) {
      currentSlide.value = 1
      return
    }
      currentSlide.value += 1
  }

  const prevSlide = () => {
    if(currentSlide.value === 1 ) {
      currentSlide.value = slideCount
      return
    }
      currentSlide.value -= 1
  }

  onMounted(() => {
    slideCount.value = storePosts.getPosts()
  })

</script>

