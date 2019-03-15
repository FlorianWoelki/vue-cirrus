<template>
  <div class="drop-caps">
    <slot></slot>
  </div>
</template>

<script>
export default {
  // TODO: Add color property dynamically to drop caps div
  props: {
    letterColor: {
      type: String,
      default: 'red',
    },
  },
};
</script>

<style>
.drop-caps:first-child:first-letter {
  color: red;
  font-size: 80px;
  padding-right: 8px;
  float: left;
  line-height: 0.7;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>
