<template>
  <div class="sidebar-dropdown">
    <input
      type="checkbox"
      id="mixins"
      class="hide"
      name="mixinsTree"
      @click="handleClick"
    >
    <label
      for="mixins"
      class="tree-item-header"
    >
      {{title}}
      <span v-if="showArrow" style="font-size: 11px; color: gray">
        <span v-if="!dropdownClicked">▶</span>
        <span v-else>▼</span>
      </span>
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
    showArrow: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
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
