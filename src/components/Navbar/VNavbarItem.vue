<template>
  <div
    :class="[
      this.tooltipMixins,
      this.animationsMixins,
      'nav-item',
      {
        active: this.active,
        selected: this.selected,
      },
    ]"
    :data-tooltip="tooltipData"
  >
    <a
      :href="href"
      @click="handleClick($event)"
      :target="blank ? '_blank' : ''"
    >
      <slot></slot>
    </a>
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
    blank: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: '',
    },
  },

  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>
