<template>
  <div class="form-group">
    <slot></slot>
  </div>
</template>

<script>
import Animations from '@/mixins/animations';

export default {
  mixins: [
    Animations,
  ],

  computed: {
    classes() {
      return Object.assign(
        this.animationsMixins,
        {
          'form-group': true,
        },
      );
    },
  },

  mounted() {
    const nodes = document.getElementsByClassName('form-group');
    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = 0; j < nodes[i].childNodes.length; j += 1) {
        const child = nodes[i].childNodes[j];
        if (child.className.toLowerCase() === 'input-control') {
          child.className += ' form-group-input';
        }
        if (child.nodeName.toLowerCase() === 'button') {
          child.className += ' form-group-btn';
        }
      }
    }
  },
};
</script>
