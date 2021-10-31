<template>
  <div class="form-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  setup() {
    onMounted(() => {
      const nodes = document.getElementsByClassName('form-group');
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = 0; j < nodes[i].childNodes.length; j += 1) {
          const child = nodes[i].childNodes[j] as Element;
          if (
            child.className
            && child.className.toLowerCase() === 'input-control'
          ) {
            child.className += ' form-group-input';
          }
          if (child.nodeName && child.nodeName.toLowerCase() === 'button') {
            child.className += ' form-group-btn';
          }
        }
      }
    });
  },
});
</script>
