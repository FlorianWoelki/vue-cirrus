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
    factor: {
      type: Number,
      default: 0.25,
    },
    margin: {
      type: Number,
      default: 50,
    },
    stopValue: {
      type: Number,
      default: 200,
    },
  },
  data() {
    return {
      height: 0,
      scrollFactor: 0,
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
      const containerRect = this.$el.getBoundingClientRect();

      this.height = containerRect.height;

      const viewportOffsetTop = containerRect.top;
      const viewportOffsetBottom = window.innerHeight - viewportOffsetTop;

      this.scrollFactor = viewportOffsetBottom / (window.innerHeight + this.height);
    },

    offset() {
      if (this.currentOffset >= -this.stopValue) {
        this.currentOffset = this.scrollFactor * this.height * -this.factor;
      } else if (this.scrollFactor * this.height * -this.factor >= -this.stopValue) {
        this.currentOffset = this.scrollFactor * this.height * -this.factor;
      }
      return this.currentOffset;
    },
  },
};
</script>
