<template>
  <div
    :class="classes"
    :data-tooltip="tooltipData"
  >
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
    <h4 v-if="title !== ''" class="toast__title">{{ title }}</h4>
    <slot></slot>
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
    title: {
      type: String,
      default: '',
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
    info: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Boolean,
      default: false,
    },
    primary: {
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
          'toast--success': this.success,
          'toast--warning': this.warning,
          'toast--error': this.error,
          'toast--info': this.info,
          'toast--link': this.link,
          'toast--primary': this.primary,
        },
      );
    },
  },
};
</script>
