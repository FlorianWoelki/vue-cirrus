<template>
  <textarea
    :placeholder="placeholder"
    :data-tooltip="tooltipData"
    :disabled="disabled"
    :class="[
      this.tooltipMixins,
      this.animationsMixins,
      {
        'dark': this.dark,
      },
    ]"
  ></textarea>
</template>

<script>
import Animations from '@/mixins/animations';
import Tooltip from '@/mixins/tooltip';

export default {
  mixins: [
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
};
</script>

<style>
textarea.dark, textarea[type=text].dark {
  background-color: #272727;
  border-color: #272727;
  color: white;
}
</style>
