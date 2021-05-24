<template>
  <div
    :style="{ transform: `translateY(${offset()}px)`, marginBottom: `${offset() + margin}px` }"
    class="parallax-element"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    speed: {
      type: Number,
      default: 0.5,
    },
    margin: {
      type: Number,
      default: 50,
    },
    stopValue: {
      type: Number,
      default: 600,
    },
  },
  data() {
    return {
      currentOffset: 0,
      eventHandler: null,
    };
  },

  mounted() {
    this.calculateParallax();

    this.eventHandler = () => requestAnimationFrame(this.calculateParallax);
    window.addEventListener('resize', this.eventHandler);
    window.addEventListener('scroll', this.eventHandler);
    window.addEventListener('load', this.eventHandler);
  },

  unmounted() {
    window.removeEventListener('resize', this.eventHandler);
    window.removeEventListener('scroll', this.eventHandler);
  },

  methods: {
    calculateParallax() {
      if (window.pageYOffset <= this.stopValue) {
        this.currentOffset = window.pageYOffset * this.speed;
      }
    },

    offset() {
      return -this.currentOffset;
    },
  },
};
</script>
