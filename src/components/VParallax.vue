<template>
  <div
    id="splash-img"
    :class="classes"
    :style="image.startsWith('http://') || image.startsWith('https://')
      ? { background: `url(${image})` }
      : { background: `url(${require(`@/${image}`)})` }"
  >
    <div v-if="!customBody" id="hero-body" class="u-center">
      <slot />
    </div>
    <slot v-else />
  </div>
</template>

<script>
export default {
  props: {
    customBody: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      default: '',
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
    classes() {
      return {
        hero: true,
        'hero-img': true,
        'parallax-img': !this.disableParallax,
        fullscreen: this.fullscreen,
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
