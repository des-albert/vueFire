<template>
  <div class="card">
      <div class="card-image has-text-centered">
        <figure @click.native="goToPost(post.id)" class="image">
          <img :src="post.url" />
        </figure>
      </div>
    
    <div class="card-content">
      <p class="title has-text-centered">{{post.title}}</p>
      <p class="subtitle has-text-centered">{{post.description}}</p>
    </div>
  </div>    

</template> 


<script setup>
  import { useRoute, useRouter } from 'vue-router'
  const props = defineProps({
    post: {
      type: Object,
      required: true
    }
  })

  const route = useRoute()
  const router = useRouter()

  const goToPost = (id) => {
 
    router.push({
      name: 'editPost',
      params: {
        id
      }
    })

  }
</script>