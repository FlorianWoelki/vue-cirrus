<template>
  <div class="tile-container">
    <p class="tile-title no-margin">{{title}}</p>
    <p class="tile-subtitle no-margin">{{subtitle}}</p>
    <span class="info">{{info}}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    info: {
      type: String,
      default: '',
    },
  },
};
</script>
