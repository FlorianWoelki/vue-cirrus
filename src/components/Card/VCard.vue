<template>
  <div v-if="!animated" :class="cardClasses">
    <slot />
  </div>
  <div v-else :class="cardClasses">
    <slot />
  </div>
  <!--
  <div v-else class="card slide-up">
    <div v-if="image" class="card-container" :style="{ 'min-height': `${height}` }">
      <div class="card-image" :style="image"></div>
    </div>
    <div class="mobile-title">
      <div class="content">
        <div class="tile">
          <div class="tile__container">
            <p class="tile__title">{{ title }}</p>
            <p class="tile__subtitle">{{ subtitle }}</p>
          </div>
        </div>
      </div>
    </div>

    <slot></slot>
  </div>
  -->
</template>

<script>
import Layout from '@/mixins/layout';
import Animations from '@/mixins/animations';

export default {
  mixins: [
    Layout,
    Animations,
  ],

  provide() {
    return {
      animated: this.animated,
    };
  },

  props: {
    animated: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    footerText: {
      type: String,
      default: '',
    },
    equalHeight: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    cardClasses() {
      return Object.assign(
        this.layoutMixins,
        this.animationsMixins,
        {
          card: true,
          'slide-up': this.animated,
          'u-flex u-flex-column h-100': this.equalHeight,
        },
      );
    },
  },
};
</script>
