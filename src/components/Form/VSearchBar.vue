<template>
  <div class="form-group">
    <input
      v-bind="$attrs"
      type="search"
      :class="[animationsMixins, tooltipMixins, 'form-group-input']"
      :data-tooltip="tooltipData"
      v-on="{
        input: event => $emit('input', event.target.value)
      }"
    />

    <slot />
  </div>
</template>

<script>
import Animations from '@/mixins/animations';
import Tooltip from '@/mixins/tooltip';

export default {
  inheritAttrs: false,
  mixins: [Animations, Tooltip],

  mounted() {
    for (let i = 0; i < this.$el.children.length; i += 1) {
      if (this.$el.children[i].tagName === 'BUTTON') {
        this.$el.children[i].classList.add('form-group-btn');
      }
    }
  },
};
</script>
