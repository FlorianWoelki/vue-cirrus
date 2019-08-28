<template>
  <div class="tile__container">
    <p class="tile__title u-no-margin">{{title}}</p>
    <p class="tile__subtitle u-no-margin">{{subtitle}}</p>
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
