<template>
  <div :class="[
    'btn-group',
    {
      'btn-group-fill': filled,
    },
  ]">
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
};
</script>
