<template>
  <div class="container is-max-desktop px-2 py-4">
    <div class="card">
      <div class="card-content is-size-6">      
        <div class="columns is-vcentered">
          <div class="column is-10 has-text-centered">
            <p class="is-size-3">Edit Post</p>
            <div class="field">
                <label class="label has-text-left">Title</label>
                <input class="input is-primary" type="text" v-model="title">
            </div>
            <div class="field">
                <label class="label label has-text-left">Description</label>
                <input class="input is-primary" type="text" v-model="description">
            </div>
            <div class="columns">
              <div class="column is-6">
                <button @click="updatePost" class="button is-info">Update</button>   
                <div v-show="showUpdate" class="notification">
                  <button @click="showUpdate=false" class="delete"></button>
                    Post updated
                </div>
              </div>
              <div class="column is-6">
                <button @click="deletePost" class="button is-info">Delete</button>
                <div v-show="showDelete" class="notification">
                  <button @click="showDelete=false" class="delete"></button>
                    Post deleted
                </div>
              </div>
            </div>
            <figure v-show="showImage" class="image">
              <img :src="postContent.url" />
            </figure>
         
          </div>
        </div>
      </div>
    </div> 
  </div>     
</template>  
<script setup>
  import { ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useStorePosts } from '@/stores/storePosts'

  const route = useRoute()
  const showImage = ref(true)

  const storePosts = useStorePosts()
  let title = ref('')
  let description = ref('')
  let showUpdate = ref(false)
  let showDelete = ref(false)

  const postContent = ref('')
  const postId = route.params.id 
  
  const deletePost = () => {
    storePosts.deletePost(postId)
    showImage.value = false
  }

  
  const updatePost = () => {
    showUpdate.value = true
    storePosts.updatePost(postId, title.value, description.value) 
  }

  postContent.value = storePosts.getPostContent(postId)
  
  title.value = postContent.value.title
  description.value = postContent.value.description

</script>