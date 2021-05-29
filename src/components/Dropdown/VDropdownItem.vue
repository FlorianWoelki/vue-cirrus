<template>
  <li class="menu-item">
    <a v-bind="$attrs">
      <slot></slot>
    </a>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  inheritAttrs: false,
});
</script>
