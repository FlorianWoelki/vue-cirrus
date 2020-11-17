<template>
  <div
    v-if="!select"
    :data-tooltip="tooltipData"
    class="input-control"
  >
    <label>
      <slot name="title" />
    </label>
    <div :class="icon ? 'input-control mt-0' : ''">
      <input
        v-bind="$attrs"
        v-on="{
          ...$listeners,
          input: event => $emit('input', event.target.value)
        }"
        :class="inputClasses"
      />
      <span class="icon">
        <slot></slot>
      </span>
    </div>
    <span class="info u-text-center">
      <slot name="info" />
    </span>
  </div>
  <div
    v-else
    class="input-control"
  >
    <select
      v-bind="$attrs"
      v-on="$listeners"
      :class="inputClasses"
      :data-tooltip="tooltipData"
    >
      <slot></slot>
    </select>
  </div>
</template>

<script>
import Animations from '@/mixins/animations';
import Tooltip from '@/mixins/tooltip';

export default {
  inheritAttrs: false,
  mixins: [
    Animations,
    Tooltip,
  ],

  props: {
    pilled: Boolean,
    select: Boolean,
    title: String,
    focused: Boolean,
    success: Boolean,
    error: Boolean,
    size: String,
    icon: Boolean,
  },

  computed: {
    inputClasses() {
      return [
        this.animationsMixins,
        this.tooltipMixins,
        this.size ? `input-${this.size}` : null,
        {
          select: this.select,
          'input-focused': this.focused,
          'text-success input-success': this.success,
          'text-danger input-error': this.error,
          'input-contains-icon': this.icon,
          'input-control--pilled': this.pilled,
        },
      ];
    },
  },
};
</script>
