<template>
  <textarea
    :placeholder=placeholder
    :data-tooltip=tooltipData
    :disabled="disabled"
    :class="classes"
  ></textarea>
</template>

<script>
import Layout from '@/mixins/layout';
import Animations from '@/mixins/animations';
import Tooltip from '@/mixins/tooltip';

export default {
  mixins: [
    Layout,
    Animations,
    Tooltip,
  ],

  props: {
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return Object.assign(
        {
          dark: this.dark,
        },
        this.layoutMixins,
        this.tooltipMixins,
        this.animationsMixins,
      );
    },
  },
};
</script>

<style>
textarea.dark, textarea[type=text].dark {
  background-color: #272727;
  border-color: #272727;
  color: white;
}
</style>
