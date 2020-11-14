<template>
  <div :class="position ? `nav-${position}` : null">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    position: String,
  },
};
</script>
