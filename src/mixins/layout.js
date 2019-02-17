export default {
  props: {
    lInline: {
      type: Boolean,
      default: false,
    },
    lInlineBlock: {
      type: Boolean,
      default: false,
    },
    lBlock: {
      type: Boolean,
      default: false,
    },
    lInlineFlex: {
      type: Boolean,
      default: false,
    },
    lOverlay: {
      type: Boolean,
      default: false,
    },
    clearLeft: {
      type: Boolean,
      default: false,
    },
    clearRight: {
      type: Boolean,
      default: false,
    },
    clearBoth: {
      type: Boolean,
      default: false,
    },
    pullLeft: {
      type: Boolean,
      default: false,
    },
    pullRight: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
    centerAlt: {
      type: Boolean,
      default: false,
    },
    vCenter: {
      type: Boolean,
      default: false,
    },
    hCenter: {
      type: Boolean,
      default: false,
    },
    textCenter: {
      type: Boolean,
      default: false,
    },
    textLeft: {
      type: Boolean,
      default: false,
    },
    textRight: {
      type: Boolean,
      default: false,
    },
    box: {
      type: Boolean,
      default: false,
    },
    fillWidth: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    noMargin: {
      type: Boolean,
      default: false,
    },
    noPadding: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    layoutClasses() {
      return {
        'this-inline': this.lInline,
        'this-inline-block': this.lInlineBlock,
        'this-block': this.lBlock,
        'this-inline-flex': this.lInlineFlex,
        'this-overlay': this.lOverlay,
        'clear-left': this.clearLeft,
        'clear-right': this.clearRight,
        'clear-both': this.clearBoth,
        'pull-left': this.pullLeft,
        'pull-right': this.pullRight,
        center: this.center,
        'center-alt': this.centerAlt,
        'vertical-center': this.vCenter,
        'horizontal-center': this.hCenter,
        'text-center': this.textCenter,
        'text-left': this.textLeft,
        'text-right': this.textRight,
        box: this.box,
        'fill-width': this.fillWidth,
        round: this.round,
        circle: this.circle,
        'no-margin': this.noMargin,
        'no-padding': this.noPadding,
      };
    },
  },
};
