<template>
  <div
    :id="id"
    :class="[
      'nav-item',
      'has-sub',
      {
        'toggle-hover': !clickable,
      },
    ]"
    @click="handleDropdownClick"
  >
    <a class="nav-dropdown-link">
      <slot name="title"></slot>
    </a>
    <ul
      :id="id + '-list'"
      :class="[
        'dropdown-menu',
        {
          'dropdown-animated': animated,
        },
      ]"
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
    id: {
      type: String,
      default: 'dropdown',
    },
  },

  methods: {
    handleDropdownClick(event) {
      this.$emit('click-dropdown', event);
      if (this.clickable) {
        if (!hasClicked) {
          document.getElementById(this.id).classList.add('active');
          document.getElementById(`${this.id}-list`).classList.add('dropdown-shown');

          hasClicked = true;
        } else {
          document.getElementById(this.id).classList.remove('active');
          document.getElementById(`${this.id}-list`).classList.remove('dropdown-shown');

          hasClicked = false;
        }
      }
    },
  },
};
</script>
