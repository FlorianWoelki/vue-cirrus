<template>
  <div class="tile__container">
    <p class="tile__title m-0">{{title}}</p>
    <p class="tile__subtitle m-0">{{subtitle}}</p>
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
