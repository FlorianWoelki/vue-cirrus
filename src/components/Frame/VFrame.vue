<template>
  <div class="frame" :style=styles>
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
