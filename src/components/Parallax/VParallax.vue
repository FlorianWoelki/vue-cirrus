<template>
  <div
    id="splash-img"
    :class="[
      'hero',
      'hero-img',
      {
        'parallax-img': !this.disableParallax,
        'fullscreen': this.fullscreen,
      },
    ]"
    :style="styleImage"
  >
    <div v-if="!customBody" id="hero-body" class="u-center">
      <slot></slot>
    </div>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    customBody: Boolean,
    fullscreen: Boolean,
    disableParallax: Boolean,
  },

  computed: {
    styleImage() {
      return this.src != null ? {
        backgroundImage: `url(${this.src})`,
      } : {};
    },
  },
};
</script>

<style>
#splash-img {
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
