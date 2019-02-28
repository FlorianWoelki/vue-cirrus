<template>
  <div class="placeholder">
    <h6 class="placeholder-title">{{this.title}}</h6>
    <div class="placeholder-subtitle">{{this.subtitle}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Coming Soon',
    },
    subtitle: {
      type: String,
      default: 'We are currently working on this segment! :)',
    },
  },
};
</script>
