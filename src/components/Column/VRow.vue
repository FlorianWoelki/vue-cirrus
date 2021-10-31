<template>
  <div
    :class="[
      'row',
      {
        'row--no-wrap': noWrap,
        level: level
      }
    ]"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    noWrap: Boolean,
    level: Boolean,
  },
});
</script>

<style>
.level {
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
</style>
