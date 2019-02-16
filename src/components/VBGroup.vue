<template>
  <div :class=classes>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    filled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'btn-group': true,
        'btn-group-fill': this.filled,
      };
    },
  },
};
</script>
