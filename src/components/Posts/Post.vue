<template>
  <div class="card">
      <div class="card-image is-4by3 has-text-centered">
        <img :src="post.url" />
      </div>
    
    <div class="card-content">
      <p class="title has-text-centered">{{post.title}}</p>
      <p class="subtitle has-text-centered">{{post.description}}</p>
    </div>
  </div>    

</template> 


<script setup>
  const props = defineProps({
    post: {
      type: Object,
      required: true
    }
  })
</script>