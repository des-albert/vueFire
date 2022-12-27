<template>
  <div class="card">

      <div class="card-content is-size-6">      
        <div class="columns is-vcentered">
          <div class="column is-10 has-text-centered">
            <p class="is-size-3">Add Post</p>
            <div class="field">
              <label class="label has-text-left">Title</label>
              <input class="input is-primary" type="text" placeholder="Title" v-model="title">
            </div>
            <div class="field">
              <label class="label label has-text-left">Description</label>
              <input class="input is-primary" type="text" placeholder="Description" v-model="description">
            </div>
            <div class="field">
            <DropZone v-show="!showFile" @drop.prevent="drop" @change="selectedFile" />
            <div v-show="showFile">
              <p>File: {{ dropzoneFile.name }}</p>
                <img :src="imageUrl" width="256" />
            </div>
            <progress v-show="showProgress" class="progress pt-3" :value="progress" max="100">{{ progress }}</progress>
            </div>
            <div class="field pt-3">
              <button @click="addPost" class="button is-info">Submit</button>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

  import DropZone from "@/components/DropZone.vue"
  import { useStorePosts } from '@/stores/storePosts'
  import { mapActions } from 'pinia'
  import axios from 'axios'

  export default {
    name: 'AddPost',
    components: {
      DropZone
    },
    data() {
      return {
        dropzoneFile: '',
        title: '',
        description: '',
        fileContents: null,
        formData: null,
        tags: 'browser-upload',
        cloudName: 'dsyohxfyg',
        preset: 'esh3pivg',
        imageUrl: '',
        errors: [],
        progress: 0,
        showProgress: false,
        showFile: false,
        results: null,
        file: null,

      }
    },

    methods: {

      ...mapActions(useStorePosts, ["storePost"] ),

      showImage() {
        this.file = this.dropzoneFile
        let reader = new FileReader() 
        reader.addEventListener(
          'load',
          () => {
            this.imageUrl = reader.result
          })
        reader.readAsDataURL(this.file)

      },

      drop(event)   {
        this.dropzoneFile = event.dataTransfer.files[0]
        this.showImage()
        this.showFile = true
      },

      selectedFile() {
        this.dropzoneFile = document.querySelector(".dropzoneFile").files[0]
        this.showImage()
        this.showFile = true
      },

      async addPost() {
        this.file = this.dropzoneFile
        let reader = new FileReader() 
        this.showProgress = true
        reader.addEventListener(
          'load',
          function() {
            this.fileContents = reader.result
            this.formData = new FormData()
            this.formData.append('upload_preset', this.preset)
            this.formData.append('tags', this.tags)
            this.formData.append('file', this.fileContents)   
            let cloudinaryUploadURL = `https://api.cloudinary.com/v1_1/${this.cloudName}/upload`
           
            let requestObj = {
              url: cloudinaryUploadURL,
              method: 'POST',
              data: this.formData,
              onUploadProgress: function(progressEvent) {
                this.progress = Math.round((progressEvent.loaded * 100.0) / progressEvent.total)
              }.bind(this)
            }
            
            axios(requestObj)
              .then(response => {
                this.results = response.data
                this.imageUrl = this.results.url
              })
              .catch(error => {
                this.errors.push(error)
                console.log(this.error)
              })
              .finally(() => {
                setTimeout(
                  function() {
                    this.showProgress = false
                  }.bind(this),
                  1000
                )
                this.storePost(this.title, this.description, this.imageUrl)
                this.showFile = false
              })
          }.bind(this),
            false
        )       
               
        if (this.file && this.file.name) {
          reader.readAsDataURL(this.file) 
             
        }   
      }
    }
  }

</script>
<style lang="scss" scoped>
.home {
  .file-info {
    margin-top: 32px;
  }
}
</style>

