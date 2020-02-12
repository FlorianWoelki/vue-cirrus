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
    fadeIn: {
      type: Boolean,
      default: false,
    },
    bounceIn: {
      type: Boolean,
      default: false,
    },
    bounce: {
      type: Boolean,
      default: false,
    },
    pulse: {
      type: Boolean,
      default: false,
    },
    hoverGrow: {
      type: Boolean,
      default: false,
    },
    loadingLeft: {
      type: Boolean,
      default: false,
    },
    loadingRight: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    animationsMixins() {
      return {
        animated: this.fadeIn || this.bounceIn || this.bounce
                || this.pulse || this.loadingLeft || this.loadingRight,
        'infinite alternate': this.infinite,
        bounceIn: this.bounceIn,
        bounce: this.bounce,
        pulse: this.pulse,
        paused: this.paused,
        fadeIn: this.fadeIn,
        'hover-grow': this.hoverGrow,
        'loading loading-left': this.loadingLeft,
        'loading loading-right': this.loadingRight,
      };
    },
  },
};
