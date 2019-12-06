<template>
  <div :class="[
    'frame',
    {
      'dark': this.dark,
    },
  ]" :style="styles">
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
    dark: {
      type: Boolean,
      default: false,
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
.frame.dark {
  box-shadow: 0 0.05rem 0.2rem rgba(69, 77, 93, .6);
}
.frame.dark .frame__body,
.frame.dark .frame__subtitle,
.frame.dark .frame__title {
  color: white;
}
.frame.dark .frame__footer,
.frame.dark .frame__footer .frame__subtitle {
  color: rgba(255, 255, 255, .6);
}
</style>
