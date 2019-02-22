<template>
  <div :class=classes>
    <slot></slot>
  </div>
</template>

<script>
import Layout from '@/mixins/layout';

export default {
  mixins: [
    Layout,
  ],

  props: {
    c1: {
      type: Boolean,
      default: false,
    },
    c2: {
      type: Boolean,
      default: false,
    },
    c3: {
      type: Boolean,
      default: false,
    },
    c4: {
      type: Boolean,
      default: false,
    },
    c5: {
      type: Boolean,
      default: false,
    },
    c6: {
      type: Boolean,
      default: false,
    },
    c7: {
      type: Boolean,
      default: false,
    },
    c8: {
      type: Boolean,
      default: false,
    },
    c9: {
      type: Boolean,
      default: false,
    },
    c10: {
      type: Boolean,
      default: false,
    },
    c11: {
      type: Boolean,
      default: false,
    },
    c12: {
      type: Boolean,
      default: false,
    },
    noSpace: {
      type: Boolean,
      default: false,
    },
    ignoreScreen: {
      type: Boolean,
      default: false,
    },
    oCenter: {
      type: Boolean,
      default: false,
    },
    oLeft: {
      type: Boolean,
      default: false,
    },
    oRight: {
      type: Boolean,
      default: false,
    },
    o1: {
      type: Boolean,
      default: false,
    },
    o2: {
      type: Boolean,
      default: false,
    },
    o3: {
      type: Boolean,
      default: false,
    },
    o4: {
      type: Boolean,
      default: false,
    },
    o5: {
      type: Boolean,
      default: false,
    },
    o6: {
      type: Boolean,
      default: false,
    },
    o7: {
      type: Boolean,
      default: false,
    },
    o8: {
      type: Boolean,
      default: false,
    },
    o9: {
      type: Boolean,
      default: false,
    },
    o10: {
      type: Boolean,
      default: false,
    },
    o11: {
      type: Boolean,
      default: false,
    },
    o12: {
      type: Boolean,
      default: false,
    },
    w10: {
      type: Boolean,
      default: false,
    },
    w20: {
      type: Boolean,
      default: false,
    },
    w30: {
      type: Boolean,
      default: false,
    },
    w40: {
      type: Boolean,
      default: false,
    },
    w50: {
      type: Boolean,
      default: false,
    },
    w60: {
      type: Boolean,
      default: false,
    },
    w70: {
      type: Boolean,
      default: false,
    },
    w80: {
      type: Boolean,
      default: false,
    },
    w90: {
      type: Boolean,
      default: false,
    },
    w100: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return Object.assign(
        this.layoutMixins,
        {
          'col-1': this.c1,
          'col-2': this.c2,
          'col-3': this.c3,
          'col-4': this.c4,
          'col-5': this.c5,
          'col-6': this.c6,
          'col-7': this.c7,
          'col-8': this.c8,
          'col-9': this.c9,
          'col-10': this.c10,
          'col-11': this.c11,
          'col-12': this.c12,
          'no-space': this.noSpace,
          'ignore-screen': this.ignoreScreen,
          'offset-center': this.oCenter,
          'offset-left': this.oLeft,
          'offset-right': this.oRight,
          'offset-1': this.o1,
          'offset-2': this.o2,
          'offset-3': this.o3,
          'offset-4': this.o4,
          'offset-5': this.o5,
          'offset-6': this.o6,
          'offset-7': this.o7,
          'offset-8': this.o8,
          'offset-9': this.o9,
          'offset-10': this.o10,
          'offset-11': this.o11,
          'offset-12': this.o12,
          'w-10': this.w10,
          'w-20': this.w20,
          'w-30': this.w30,
          'w-40': this.w40,
          'w-50': this.w50,
          'w-60': this.w60,
          'w-70': this.w70,
          'w-80': this.w80,
          'w-90': this.w90,
          'w-100': this.w100,
        },
      );
    },
  },
};
</script>
