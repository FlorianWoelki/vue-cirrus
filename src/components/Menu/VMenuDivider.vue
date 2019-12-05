<template>
  <li class="divider" :data-label="label"></li>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: null,
    },
  },
};
</script>
