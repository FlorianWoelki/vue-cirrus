<template>
  <div
    id="splash-img"
    :class="[
      'hero',
      'hero-img',
      {
        'parallax-img': !disableParallax,
        fullscreen: fullscreen
      }
    ]"
    :style="styleImage"
  >
    <div v-if="!customBody" id="hero-body" class="u-center">
      <slot></slot>
    </div>
    <slot v-else></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    src: String,
    customBody: Boolean,
    fullscreen: Boolean,
    disableParallax: Boolean,
  },
  setup(props) {
    const styleImage = computed(() => (props.src != null
        ? {
            backgroundImage: `url(${props.src})`,
          }
        : {}));

    return {
      styleImage,
    };
  },
});
</script>

<style>
#splash-img {
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
