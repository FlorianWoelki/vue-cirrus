<template>
  <div class="playground-component">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['outline', 'color', 'size', 'loading'],
};
</script>
