<template>
  <textarea :placeholder=placeholder></textarea>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '',
    },
  },
};
</script>
