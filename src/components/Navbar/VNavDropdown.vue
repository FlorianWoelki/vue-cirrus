<template>
  <div :class=dropdownClasses :id=dropdownId @click="handleDropdownClick">
    <a class="nav-dropdown-link">
      <slot name="title"></slot>
    </a>
    <ul :class=ulClasses :id="dropdownId + '-list'" role="menu">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
let hasClicked = false;

export default {
  props: {
    animated: {
      type: Boolean,
      default: false,
    },
    clickable: {
      type: Boolean,
      default: false,
    },
    dropdownId: {
      type: String,
      default: 'dropdown',
    },
  },

  methods: {
    handleDropdownClick() {
      if (this.clickable) {
        if (!hasClicked) {
          document.getElementById(this.dropdownId).classList.add('active');
          document.getElementById(`${this.dropdownId}-list`).classList.add('dropdown-shown');

          hasClicked = true;
        } else {
          document.getElementById(this.dropdownId).classList.remove('active');
          document.getElementById(`${this.dropdownId}-list`).classList.remove('dropdown-shown');

          hasClicked = false;
        }
      }
    },
  },

  computed: {
    dropdownClasses() {
      return {
        'nav-item': true,
        'has-sub': true,
        'toggle-hover': !this.clickable,
      };
    },
    ulClasses() {
      return {
        'dropdown-menu': true,
        'dropdown-animated': this.animated,
      };
    },
  },
};
</script>
