<template>
  <div
    :class="[
      tooltipMixins,
      animationsMixins,
      'toast',
      color ? `toast--${color}` : null,
    ]"
    :data-tooltip="tooltipData"
  >
    <button
      v-if="closable"
      class="btn-close"
      @click="handleClose($event)"
    ></button>
    <h4 v-if="title" class="toast__title">{{ title }}</h4>
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
    title: String,
    color: String,
    disableCloseFunction: Boolean,
    closable: Boolean,
  },

  methods: {
    handleClose(event) {
      if (!this.disableCloseFunction) {
        const buttonElement = event.srcElement;
        buttonElement.parentNode.style.visibility = 'hidden';
      }
    },
  },
};
</script>
