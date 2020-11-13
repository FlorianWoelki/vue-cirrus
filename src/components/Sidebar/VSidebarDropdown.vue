<template>
  <div :class="[
    'tree-item',
    {
      'hover-effect': this.$parent.hoverEffect,
    },
  ]">
    <input
      :id="id"
      type="checkbox"
      class="u-none"
      name="sbTree"
      @click="handleClick"
    >
    <label
      :for="id"
      class="tree-item-header"
      style="margin-left:0;"
    >
      <span v-if="showArrow" style="font-size: 11px; color: gray">
        <span v-if="!dropdownClicked">
          <i class="fas fa-chevron-right"></i>
        </span>
        <span v-else>
          <i class="fas fa-chevron-down"></i>
        </span>
      </span>
      {{ title }}
    </label>
    <div class="tree-item-body">
      <ul class="menu">
        <slot></slot>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownClicked: false,
    };
  },

  props: {
    id: {
      type: String,
      default: 'sb-dropdown',
    },
    showArrow: Boolean,
    title: String,
  },

  methods: {
    handleClick() {
      this.dropdownClicked = !this.dropdownClicked;
    },
  },
};
</script>

<style>
.sidebar-dropdown label {
  padding: 0 !important;
  margin: 0 !important;
}
</style>
