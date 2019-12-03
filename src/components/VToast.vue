<template>
  <div
    :class="[
      this.tooltipMixins,
      this.animationsMixins,
      'toast',
      this.color ? `toast--${this.color}` : null,
    ]"
    :data-tooltip="tooltipData"
  >
    <button
      v-if="closable"
      class="btn-close"
      @click="handleClose($event)"
    ></button>
    <h4 v-if="title !== ''" class="toast__title">{{ title }}</h4>
    <slot></slot>
  </div>
</template>

<script>
import Tooltip from '@/mixins/tooltip';
import Animations from '@/mixins/animations';

export default {
  mixins: [
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
    color: {
      type: String,
      default: null,
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
      if (!this.disableCloseFunction) {
        const buttonElement = event.srcElement;
        buttonElement.parentNode.style.visibility = 'hidden';
      }
    },
  },
};
</script>
