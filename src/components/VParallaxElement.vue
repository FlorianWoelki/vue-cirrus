<template>
  <div
    :style="{ transform: `translateY(${offset()}px)`, marginBottom: `${offset()+margin}px` }"
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
    };
  },

  mounted() {
    this.calculateParallax();

    const eventHandler = () => requestAnimationFrame(this.calculateParallax);
    window.addEventListener('resize', eventHandler);
    window.addEventListener('scroll', eventHandler);
    window.addEventListener('load', eventHandler);

    this.$on('hook:destroyed', () => {
      window.removeEventListener('resize', eventHandler);
      window.removeEventListener('scroll', eventHandler);
    });
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
