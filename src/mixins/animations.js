export default {
  props: {
    infinite: {
      type: Boolean,
      default: false,
    },
    paused: {
      type: Boolean,
      default: false,
    },
    animation: {
      type: String,
      default: null,
    },
  },

  computed: {
    animationsMixins() {
      return {
        animated: this.animation === 'fadeIn' || this.animation === 'bounceIn' || this.animation === 'bounce'
                || this.animation === 'pulse' || this.animation === 'loadingLeft' || this.animation === 'loadingRight',
        'infinite alternate': this.infinite,
        bounceIn: this.animation === 'bounceIn',
        bounce: this.animation === 'bounce',
        pulse: this.animation === 'pulse',
        paused: this.paused,
        fadeIn: this.animation === 'fadeIn',
        'hover-grow': this.animation === 'hoverGrow',
        'loading loading-left': this.animation === 'loadingLeft',
        'loading loading-right': this.animation === 'loadingRight',
      };
    },
  },
};
