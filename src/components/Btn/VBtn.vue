<template>
  <button
    :class="[
      this.tooltipMixins,
      this.animationsMixins,
      this.color ? `btn-${this.color}` : null,
      this.size ? `btn-${this.size}` : null,
      {
        'btn-animated': this.animated,
        'outline': this.outline,
        'btn--pilled': this.pilled,
        'btn--circle': this.circle,
        'btn-dropdown': this.dropdown,
        'u-no-margin': this.dropdown,
        'form-group-btn': this.formGroup,
      },
    ]"
    :data-tooltip="tooltipData"
    :disabled="disabled"
    @click="handleClick($event)"
  >
    <slot></slot>
  </button>
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
    formGroup: {
      type: Boolean,
      default: false,
    },
    dropdown: {
      type: Boolean,
      default: false,
    },
    pilled: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    animated: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: null,
    },
  },

  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.$emit('click', event);
      }
    },
  },
};
</script>
