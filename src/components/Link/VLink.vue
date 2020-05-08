<template>
  <span
    :class="animation === 'squared' ? 'usquare' : animation === 'dSquared' ? 'usquare delay' : null"
  >
    <a
      :href="href"
      :class="[
        this.tooltipMixins,
        this.animationsMixins,
        {
          'u u-LR': this.animation === 'ltr',
          'u u-RL': this.animation === 'rtl',
          'u u-C': this.animation === 'c',
          'utb utb-LR': this.animation === 'oltr',
          'utb utb-RL': this.animation === 'ortl',
          'utb utb-C': this.animation === 'oc',
          'utb utb-OLR': this.animation === 'olr',
          'utb utb-ORL': this.animation === 'orl',
          'utb utb-OLR sq': this.animation === 'squared',
          'utb utb-OLR delay': this.animation === 'dSquared',
          underline: this.animation === 'underlined',
        },
      ]"
      :target="blank ? '_blank' : ''"
      :data-tooltip=tooltipData
      @click="$emit('click', $event)"
    >
      <slot></slot>
    </a>
  </span>
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
    href: {
      type: String,
      default: '#',
    },
    blank: {
      type: Boolean,
      default: false,
    },
    animation: {
      type: String,
      default: null,
      validator: value => [
        'ltr', 'rtl', 'c', 'oltr', 'ortl', 'oc', 'olr',
        'orl', 'underlined', 'squared', 'dSquared',
      ].indexOf(value) !== -1,
    },
  },
};
</script>
