<template>
  <pre>
    <code :data-lang=lang>
      <slot></slot>
    </code>
  </pre>
</template>

<script>
export default {
  props: {
    lang: {
      type: String,
      default: '',
    },
  },
};
</script>
