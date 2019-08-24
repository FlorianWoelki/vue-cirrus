<template>
  <div
    :class=classes
    :data-tooltip=tooltipData
  >
    <slot></slot>
    <button
      v-if="closable && !disableCloseFunction"
      class="btn-close"
      @click="handleClose($event)"
    ></button>
    <button
      v-else-if="closable"
      class="btn-close"
      @click="handleClick($event)"
    >
    </button>
  </div>
</template>

<script>
import Layout from '@/mixins/layout';
import Tooltip from '@/mixins/tooltip';
import Animations from '@/mixins/animations';

export default {
  mixins: [
    Layout,
    Tooltip,
    Animations,
  ],

  props: {
    disableCloseFunction: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    warning: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    closable: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
    handleClose(event) {
      const buttonElement = event.srcElement;
      buttonElement.parentNode.style.visibility = 'hidden';
    },
  },

  computed: {
    classes() {
      return Object.assign(
        this.layoutMixins,
        this.tooltipMixins,
        this.animationsMixins,
        {
          toast: true,
          success: this.success,
          warning: this.warning,
          error: this.error,
        },
      );
    },
  },
};
</script>
