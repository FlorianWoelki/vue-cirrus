<template>
  <div class="form-group">
    <input
      type="search"
      :class=inputClasses
      :data-tooltip=tooltipData
      :placeholder=placeholder
      @input="$emit('input', $event.target.value)"
    >
    <button
      class="form-group-btn"
      @click=searchAction
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
import Layout from '@/mixins/layout';
import Animations from '@/mixins/animations';
import Tooltip from '@/mixins/tooltip';

export default {
  mixins: [
    Layout,
    Animations,
    Tooltip,
  ],

  props: {
    placeholder: {
      type: String,
      default: 'Search',
    },
    searchAction: {
      type: Function,
      default: () => 1,
    },
  },

  computed: {
    inputClasses() {
      return Object.assign(
        this.layoutMixins,
        this.animationsMixins,
        this.tooltipMixins,
        {
          'form-group-input': true,
        },
      );
    },
  },
};
</script>
