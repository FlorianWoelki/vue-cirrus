<template>
  <div class="frame" :style="styles">
    <div :class="[
      this.animationsMixins,
      'frame__header'
    ]">
      <slot name="header"></slot>

      <div :class="[
        this.animationsMixins,
        'frame__title',
      ]">
        <slot name="title"></slot>
      </div>
      <div :class="[
        this.animationsMixins,
        'frame__subtitle'
      ]">
        <slot name="subtitle"></slot>
      </div>
    </div>

    <div :class="[
      this.animationsMixins,
      'frame__body'
    ]">
      <slot></slot>
    </div>


    <div :class="[
      this.animationsMixins,
      'frame__footer'
    ]">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import Animations from '@/mixins/animations';

export default {
  mixins: [
    Animations,
  ],

  props: {
    height: {
      type: String,
      default: '30rem',
    },
  },

  computed: {
    styles() {
      return {
        height: this.height,
      };
    },
  },
};
</script>

<style>
</style>
