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
    customBody: {
      type: Boolean,
      default: false,
    },
    src: {
      type: String,
      default: null,
    },
    fullscreen: {
      type: Boolean,
      default: false,
    },
    disableParallax: {
      type: Boolean,
      default: false,
    },
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
