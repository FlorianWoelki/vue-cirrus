<template>
  <input type="color" :value="defaultValue">
</template>

<script>
export default {
  props: {
    defaultValue: {
      type: String,
      default: '#000',
    },
  },
};
</script>
