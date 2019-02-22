export default {
  props: {
    infinite: {
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
  },

  computed: {
    animationsMixins() {
      return {
        animated: this.fadeIn || this.bounceIn || this.bounce || this.pulse,
        'infinite alternate': this.infinite,
        bounceIn: this.bounceIn,
        bounce: this.bounce,
        pulse: this.pulse,
        fadeIn: this.fadeIn,
        'hover-grow': this.hoverGrow,
      };
    },
  },
};
