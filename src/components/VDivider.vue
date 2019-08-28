<template>
  <div v-if="!vertical" :class=classes></div>
  <div v-else style="position:relative; height:300px">
    <div :class=classes style="height: 100%;" :data-content="content"></div>
  </div>
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
    short: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    content: {
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
          divider: !this.vertical,
          'divider-short': this.short,
          'divider--v': this.vertical,
        },
      );
    },
  },
};
</script>

<style>
.divider-short {
  max-width: 15rem;
  width: 100%;
}
</style>
