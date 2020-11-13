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
    filled: Boolean,
  },
};
</script>
