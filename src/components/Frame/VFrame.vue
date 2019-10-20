<template>
  <div :class="classes" :style=styles>
    <slot></slot>
  </div>
</template>

<script>
export default {
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
    classes() {
      return {
        frame: true,
        dark: this.dark,
      };
    },

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
