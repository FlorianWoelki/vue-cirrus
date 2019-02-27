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
export default {
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
      return {
        'menu-dropdown': true,
        'dropdown-right': this.right,
        'dropdown-left': this.left,
      };
    },
  },
};
</script>
