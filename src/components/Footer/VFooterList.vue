<template>
  <ul :class="classes">
    <slot />
  </ul>
</template>

<script>
import Layout from '@/mixins/layout';

export default {
  mixins: [
    Layout,
  ],

  computed: {
    classes() {
      return Object.assign(
        this.layoutMixins,
        {
          'no-bullets': true,
        },
      );
    },
  },
};
</script>
