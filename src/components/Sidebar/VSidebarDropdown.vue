<template>
  <div
    :class="[
      'tree-item',
      {
        'hover-effect': $parent.hoverEffect
      }
    ]"
  >
    <input
      :id="id"
      type="checkbox"
      class="u-none"
      name="sbTree"
      @click="dropdownClicked = !dropdownClicked"
    />
    <label
      v-bind="$attrs"
      :for="id"
      class="tree-item-header ml-0 u-flex u-items-center pl-0"
    >
      <svg
        v-if="showArrow && !dropdownClicked"
        style="width: 1.25rem; height: 1.25rem"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <svg
        v-else-if="showArrow"
        style="width: 1.25rem; height: 1.25rem"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>

      <slot name="title" />
    </label>
    <div class="tree-item-body">
      <ul class="menu">
        <slot></slot>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: 'sb-dropdown',
    },
    showArrow: Boolean,
  },
  setup() {
    const dropdownClicked = ref<boolean>(false);

    return {
      dropdownClicked,
    };
  },
});
</script>

<style>
.sidebar-dropdown label {
  padding: 0 !important;
  margin: 0 !important;
}
</style>
