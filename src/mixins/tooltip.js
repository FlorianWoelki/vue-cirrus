export default {
  props: {
    tooltipText: {
      type: String,
      default: '',
    },
    tooltipTopLeft: {
      type: Boolean,
      default: false,
    },
    tooltipTopRight: {
      type: Boolean,
      default: false,
    },
    tooltipBottom: {
      type: Boolean,
      default: false,
    },
    tooltipBottomLeft: {
      type: Boolean,
      default: false,
    },
    tooltipBottomRight: {
      type: Boolean,
      default: false,
    },
    tooltipLeft: {
      type: Boolean,
      default: false,
    },
    tooltipRight: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    tooltipMixins() {
      return {
        tooltip: this.tooltipText !== '',
        'tooltip-top-left': this.tooltipTopLeft,
        'tooltip-top-right': this.tooltipTopRight,
        'tooltip-bottom': this.tooltipBottom,
        'tooltip-bottom-left': this.tooltipBottomLeft,
        'tooltip-bottom-right': this.tooltipBottomRight,
        'tooltip-left': this.tooltipLeft,
        'tooltip-right': this.tooltipRight,
      };
    },
    tooltipData() {
      return this.tooltipText;
    },
  },
};
