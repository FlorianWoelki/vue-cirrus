<template>
  <div class="form-group">
    <input
      type="search"
      :class="[
        this.animationsMixins,
        this.tooltipMixins,
        'form-group-input',
        {
          'dark': this.dark,
        },
      ]"
      :data-tooltip="tooltipData"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    <v-btn
      v-if="!noButton"
      class="form-group-btn"
      @click="searchAction"
      :dark="dark"
    >
      <slot />
    </v-btn>
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
    placeholder: {
      type: String,
      default: 'Search',
    },
    noButton: {
      type: Boolean,
      default: false,
    },
    searchAction: {
      type: Function,
      default: () => 1,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
  },
};
</script>

<style>
.form-group .form-group-btn:first-child:not(:last-child).dark,
.form-group .form-group-input:first-child:not(:last-child).dark,
.form-group .form-group-label:first-child:not(:last-child).dark {
  background-color: #272727;
}
input.search.dark, input[type=search].dark {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="rgb(120, 120, 120)" d="M14.891,14.39l-0.5.5a0.355,0.355,0,0,1-.5,0L9.526,10.529a5.3,5.3,0,1,1,2.106-4.212,5.268,5.268,0,0,1-1.1,3.21l4.362,4.362A0.354,0.354,0,0,1,14.891,14.39ZM6.316,2.418a3.9,3.9,0,1,0,3.9,3.9A3.9,3.9,0,0,0,6.316,2.418Z"/></svg>');
}
</style>
