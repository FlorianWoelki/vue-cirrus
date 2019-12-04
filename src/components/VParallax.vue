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
    <slot></slot>
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
      return {
        backgroundImage: `url(${this.src})`,
      };
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
