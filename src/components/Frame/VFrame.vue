<template>
  <div class="frame" :style="{ height: height }">
    <div class="frame__header">
      <slot name="header"></slot>

      <div v-if="$slots['title']" class="frame__title">
        <slot name="title"></slot>
      </div>
      <div v-if="$slots['subtitle']" class="frame__subtitle">
        <slot name="subtitle"></slot>
      </div>
    </div>

    <div class="frame__body">
      <slot></slot>
    </div>


    <div v-if="$slots['footer']" class="frame__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import Animations from '@/mixins/animations';

export default {
  mixins: [
    Animations,
  ],

  props: {
    height: {
      type: String,
      default: '30rem',
    },
  },
};
</script>
