<template>
  <li :class=classes>
    <a :href=link>
      <slot></slot>
    </a>
  </li>
</template>

<script>
import Layout from '@/mixins/layout';
import Animations from '@/mixins/animations';

export default {
  mixins: [
    Layout,
    Animations,
  ],

  props: {
    link: {
      type: String,
      default: '',
    },
  },

  computed: {
    classes() {
      return Object.assign(
        this.layoutMixins,
        this.animationsMixins,
        {
          'menu-item': true,
        },
      );
    },
  },
};
</script>
