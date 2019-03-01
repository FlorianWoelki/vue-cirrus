<template>
  <div class="hero fullscreen hero-img parallax-img">
    <video
      preload="auto"
      autoplay
      loop
      class="fillWidth fadeIn animated"
      :poster=link
    />
    <div class="hero-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '',
    },
  },
};
</script>

<style>
video {
  position: absolute;
  height: 100vh;
  object-fit: fill;
  width: 100%;
  z-index: -1;
}
</style>
