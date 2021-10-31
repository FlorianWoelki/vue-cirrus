<template>
  <div
    :class="[
      'pagination-item short',
      {
        selected: selected
      }
    ]"
  >
    <a v-bind="$attrs" :disabled="disabled">
      <slot></slot>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  inheritAttrs: false,
  props: {
    selected: Boolean,
    disabled: Boolean,
  },
});
</script>
