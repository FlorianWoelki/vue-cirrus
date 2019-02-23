<template>
  <div class="card">
    <div class="card-head">
      <p class="card-head-title">{{title}}</p>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>
