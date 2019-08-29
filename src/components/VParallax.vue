<template>
  <div
    id="splash-img"
    :class="classes"
    :style="image.startsWith('http://') || image.startsWith('https://')
      ? { background: `url(${image})` }
      : { background: `url(${require(`@/${image}`)})` }"
  >
    <div id="hero-body" class="u-center">
      <v-row>
        <v-col>
          <h1 class="white">Hello World</h1>
          <v-divider />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
