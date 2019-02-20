<template>
  <div :class=classes>
    <slot></slot>
  </div>
</template>

<script>
import Layout from '../mixins/layout';

export default {
  mixins: [
    Layout,
  ],

  props: {
    filled: {
      type: Boolean,
      default: false,
    },
  },
  
  computed: {
    classes() {
      return Object.assign(
        this.layoutMixins,
        {
          'btn-group': true,
          'btn-group-fill': this.filled,
        },
      );
    },
  },
};
</script>
