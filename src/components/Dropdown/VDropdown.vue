<template>
  <div :class=dropdownClasses>
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

export default {
  mixins: [
    Layout,
    Animations,
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
