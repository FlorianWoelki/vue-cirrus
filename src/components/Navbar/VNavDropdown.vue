<template>
  <div class="nav-item has-sub toggle-hover" id="dropdown">
    <a class="nav-dropdown-link">Animated</a>
    <ul :class=ulClasses role="menu">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    animated: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ulClasses() {
      return {
        'dropdown-menu': true,
        'dropdown-animated': this.animated,
      };
    },
  },
};
</script>
