<template>
  <div
    v-if="!animated"
    :class=cardClasses
  >
    <div class="card-container">
      <div
        class="card-image"
        :style=image
      >
      </div>
      <div class="title-container">
        <p class="title">{{title}}</p>
        <span class="subtitle">{{subtitle}}</span>
      </div>
    </div>

    <slot></slot>

    <div class="card-footer content-fluid">
      <div class="text-center">
        <span>{{footerText}}</span>
      </div>
    </div>
  </div>
  <div
    v-else
    class="card slide-up"
  >
    <div class="card-container">
      <div
        class="card-image"
        :style=image
      ></div>
    </div>
    <div class="mobile-title">
      <div class="content">
        <div class="tile">
          <div class="tile-container">
            <p class="tile-title">{{title}}</p>
            <p class="tile-subtitle">{{subtitle}}</p>
          </div>
        </div>
      </div>
    </div>

    <slot></slot>

    <div class="card-footer content">
      <span>{{footerText}}</span>
    </div>
  </div>
</template>

<script>
import Layout from '@/mixins/layout';
import Animations from '@/mixins/animations';

export default {
  mixins: [
    Layout,
    Animations,
  ],

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
    image: {
      type: String,
      default: 'background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);',
    },
  },

  computed: {
    cardClasses() {
      return Object.assign(
        this.layoutMixins,
        this.animationsMixins,
        {
          card: true,
        },
      );
    },
  },
};
</script>
