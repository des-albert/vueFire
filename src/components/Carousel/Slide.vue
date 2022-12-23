<template>
  <div class="slide">
    <transition name="fade" mode="out-in" duration="250">
      <slot  />
    </transition>
    
  </div>  

</template>

<script >



</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes bounce {
  0%,
  20%,
  53%,
  80%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  40%,
  43% {
    transform: translate3d(0, -20px, 0);
  }
  70% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
}
</style>