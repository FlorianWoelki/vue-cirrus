<template>
  <div :class="[
    'space',
    {
      'large': this.large && !this.xlarge,
      'x-large': this.xlarge,
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

<style>
.space {
  display: block;
  width: 100%;
  height: 1rem;
}
.space.large {
  padding: 1rem 0;
}
.space.x-large {
  padding: 2rem 0;
}
</style>
