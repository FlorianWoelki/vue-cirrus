<template>
  <div :class="[
    'space',
    {
      'large': large && !xlarge,
      'xlarge': xlarge,
    },
  ]">
  </div>
</template>

<script>
export default {
  props: {
    large: Boolean,
    xlarge: Boolean,
  },
};
</script>
