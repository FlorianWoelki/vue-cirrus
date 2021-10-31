<template>
  <footer :class="['footer', fixed ? 'footer--fixed' : null]">
    <div v-if="$slots['title']" class="footer__title">
      <slot name="title" />
    </div>

    <slot></slot>

    <div v-if="$slots['subtitle']" class="subtitle">
      <slot name="subtitle" />
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    fixed: Boolean,
  },
});
</script>

<style>
footer .divider {
  background: rgba(238, 238, 238, 0.2);
  height: 1px;
}
footer ul a {
  display: block;
}
footer ul a li:hover {
  color: #fff;
  transition: all 0.3s;
}
</style>
