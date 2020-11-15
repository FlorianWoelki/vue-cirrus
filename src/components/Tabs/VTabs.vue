<template>
  <div :class="[
    'tab-container',
    size ? `tabs-${size}` : null,
    mode ? `tabs-${mode}` : null,
    position ? `tabs-${position}` : null,
  ]">
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    size: String,
    position: String,
    mode: String,
  },
};
</script>
