<template>
  <div :class=dropdownClasses :data-tooltip=tooltipData>
    <v-btn class="btn-dropdown">
      {{this.btnText}}
    </v-btn>
    <ul class="menu">
      <slot></slot>
    </ul>
  </div>
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
    btnText: {
      type: String,
      default: 'Dropdown',
    },
    right: {
      type: Boolean,
      default: false,
    },
    left: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    dropdownClasses() {
      return Object.assign(
        this.layoutMixins,
        this.animationsMixins,
        this.tooltipMixins,
        {
          'menu-dropdown': true,
          'dropdown-right': this.right,
          'dropdown-left': this.left,
        },
      );
    },
  },
};
</script>
