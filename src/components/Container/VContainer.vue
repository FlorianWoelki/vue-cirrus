<template>
  <div :class="[
    {
      'content': !noPadding && !fluid,
      'content-no-padding': noPadding && !fluid,
      'content-fluid': fluid,
    },
  ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    noPadding: Boolean,
    fluid: Boolean,
  },
};
</script>
