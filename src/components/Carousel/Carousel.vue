<template>
  <div class="carousel">
      <div class="columns is-vcentered">
        <div class="column is-1 has-text-centered">
          <button @click="prevSlide" class="button is-info"><i class="fas fa-chevron-left"></i></button>
        </div>
        <div class="column is-10">
        <slot :currentSlide="currentSlide" /> 
        </div>
        <div class="column is-1 has-text-centered">
          <button @click="nextSlide" class="button is-info"><i class="fas fa-chevron-right"></i></button> 
        </div>
      </div>
  </div>

</template>


<script setup>

  import { ref } from 'vue'
  import { useStorePosts } from '@/stores/storePosts'
  
  const props = defineProps({
    timeout: {}
  })

  const storePosts = useStorePosts()
  const timeoutDuration = props.timeout
  const currentSlide = ref(1)

  const nextSlide = () => {
    if(currentSlide.value === storePosts.getPostCount) {
      currentSlide.value = 1
      return
    }
      currentSlide.value += 1
  }

  const prevSlide = () => {
    if(currentSlide.value === 1 ) {
      currentSlide.value = storePosts.getPostCount
      return
    }
      currentSlide.value -= 1
  }

  const autoPlay = () => {
    setInterval(() => {
      nextSlide()
    }, timeoutDuration)
  }
  
  autoPlay()
  
</script>

