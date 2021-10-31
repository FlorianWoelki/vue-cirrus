<template>
  <li class="pagination-item pagination-prev">
    <a v-bind="$attrs" class="u-block">
      <p class="pagination-item-subtitle">{{ prevText }}</p>
      <h5 class="m-0">
        <slot />
      </h5>
    </a>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  inheritAttrs: false,
  props: {
    prevText: {
      type: String,
      default: 'Prev',
    },
  },
});
</script>
