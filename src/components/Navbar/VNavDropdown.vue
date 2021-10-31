<template>
  <div
    :id="id"
    :class="[
      'nav-item',
      'has-sub',
      {
        'toggle-hover': !clickable
      }
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
          'dropdown-animated': animated
        }
      ]"
      role="menu"
    >
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

let hasClicked = false;

export default defineComponent({
  emits: ['click-dropdown'],
  props: {
    animated: Boolean,
    clickable: Boolean,
    id: {
      type: String,
      default: 'dropdown',
    },
  },
  setup(props, { emit }) {
    const handleDropdownClick = (event: MouseEvent): void => {
      emit('click-dropdown', event);
      if (props.clickable) {
        const dropdownEl = document.getElementById(props.id);
        const listEl = document.getElementById(`${props.id}-list`);
        if (!dropdownEl || !listEl) {
          return;
        }

        if (!hasClicked) {
          dropdownEl.classList.add('active');
          listEl.classList.add('dropdown-shown');

          hasClicked = true;
        } else {
          dropdownEl.classList.remove('active');
          listEl.classList.remove('dropdown-shown');

          hasClicked = false;
        }
      }
    };

    return {
      handleDropdownClick,
    };
  },
});
</script>
