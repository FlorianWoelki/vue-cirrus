<template>
  <span
    :class="animation === 'squared' ? 'usquare' : animation === 'dSquared' ? 'usquare delay' : null"
  >
    <a
      :href="href"
      :class="[
        tooltipMixins,
        animationsMixins,
        {
          'u u-LR': animation === 'ltr',
          'u u-RL': animation === 'rtl',
          'u u-C': animation === 'c',
          'utb utb-LR': animation === 'oltr',
          'utb utb-RL': animation === 'ortl',
          'utb utb-C': animation === 'oc',
          'utb utb-OLR': animation === 'olr',
          'utb utb-ORL': animation === 'orl',
          'utb utb-OLR sq': animation === 'squared',
          'utb utb-OLR delay': animation === 'dSquared',
          underline: animation === 'underlined',
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
    blank: Boolean,
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
