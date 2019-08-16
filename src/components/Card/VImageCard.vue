<template>
  <div class="card">
    <div class="card-container">
      <div
        class="card-image"
        :style="'background-image: url(' + imageUrl + ')'"
      ></div>
      <div class="title-container">
        <p class="title">{{ title }}</p>
        <span class="subtitle">{{ subtitle }}</span>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'undefined',
    },
    subtitle: {
      type: String,
      default: 'undefined',
    },
    imageUrl: {
      type: String,
      default: '',
    },
  },
};
</script>
