<template>
  <div :class="[
    'space',
    {
      'large': this.large && !this.xlarge,
      'xlarge': this.xlarge,
    },
  ]">
  </div>
</template>

<script>
export default {
  props: {
    large: {
      type: Boolean,
      default: false,
    },
    xlarge: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
