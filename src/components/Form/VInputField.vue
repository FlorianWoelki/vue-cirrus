<template>
  <input
    v-if="formGroup"
    :data-tooltip="tooltipData"
    :type="type"
    :class="inputClasses"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
  <div
    v-else-if="!select"
    :data-tooltip="tooltipData"
    class="input-control"
  >
    <label
      v-if="title"
      :class="'font-normal' + (dark ? ' text-light' : '')"
    >{{title}}</label>
    <span
      v-if="subtitle"
      :class="[
        'info',
        this.subtitleInline ? 'inline' : null,
      ]"
    >{{subtitle}}</span>
    <div :class="icon ? 'input-control' : ''">
      <input
        :type="type"
        :class="inputClasses"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
      <slot></slot>
    </div>
    <span
      v-if="infoText"
      class="info u-text-center"
    >{{infoText}}</span>
  </div>
  <div
    v-else
    class="input-control"
  >
    <select
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
  mixins: [
    Animations,
    Tooltip,
  ],

  props: {
    pilled: {
      type: Boolean,
      default: false,
    },
    formGroup: {
      type: Boolean,
      default: false,
    },
    select: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    subtitleInline: {
      type: Boolean,
      default: false,
    },
    infoText: {
      type: String,
      default: '',
    },
    focused: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: null,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    inputClasses() {
      return [
        this.animationsMixins,
        this.tooltipMixins,
        this.size ? `input-${this.size}` : null,
        {
          select: this.select,
          'form-group-input': this.formGroup,
          'input-focused': this.focused,
          'text-success input-success': this.success,
          'text-danger input-error': this.error,
          'input-contains-icon': this.icon,
          'input-control--pilled': this.pilled,
          dark: this.dark,
        },
      ];
    },
  },
};
</script>

<style>
input:not([type=checkbox]):not([type=radio]):not([type=submit]).dark, select.dark {
  background-color: #272727;
  border-color: #272727;
  color: white;
}
</style>
