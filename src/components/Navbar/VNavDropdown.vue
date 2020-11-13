<template>
  <div
    :class="[
      'nav-item',
      'has-sub',
      {
        'toggle-hover': !this.clickable,
      },
    ]"
    :id="dropdownId"
    @click="handleDropdownClick"
  >
    <a class="nav-dropdown-link">
      <slot name="title"></slot>
    </a>
    <ul
      :class="[
        'dropdown-menu',
        {
          'dropdown-animated': this.animated,
        },
      ]"
      :id="dropdownId + '-list'"
      role="menu"
    >
      <slot></slot>
    </ul>
  </div>
</template>

<script>
let hasClicked = false;

export default {
  props: {
    animated: Boolean,
    clickable: Boolean,
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
};
</script>
