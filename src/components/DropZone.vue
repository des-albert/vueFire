<template>
    <div
      @dragenter.prevent="toggleActive"
      @dragleave.prevent="toggleActive"
      @dragover.prevent
      @drop.prevent="toggleActive"
      :class="{ 'active-dropzone': active }"
      class="dropzone is-flex-direction-column is-"
    >
      <span>Drag or Drop File</span>
      <span>OR</span>
      <label for="dropzoneFile">Select File</label>
      <input type="file" id="dropzoneFile" class="dropzoneFile" />
    </div>

</template>  
<script>

export default {
  data() {
    return {
      active: false,
    }
  },
  methods: {
    toggleActive() {
      this.active = !this.active
    }
  }

}

</script>

<style scoped lang="scss">
  .dropzone {  
    position: relative; 
    width: 400px;
    height: 200px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed #41b883;

    label {
      padding: 8px 12px;
      color: #fff;
      background-color: #41b883;
      transition: 0.3s ease all;
    } 
    input {
      display: none;
    }
  }

  .active-dropzone {
    color: #fff;
    border-color: #fff;
    background-color: #41b883;
    label {
      background-color: #fff;
      color: #41b883;
    }
  }
  

</style>