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
    hideOverflow: {
      type: Boolean,
      default: false,
    },
    hide: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    unselectable: {
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
    font: {
      type: String,
      default: '',
    },
    hideMobile: {
      type: Boolean,
      default: false,
    },
    hideTablet: {
      type: Boolean,
      default: false,
    },
    hideTabletOnly: {
      type: Boolean,
      default: false,
    },
    hideDesktop: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    layoutMixins() {
      return {
        'u-inline': this.lInline,
        'u-inline-block': this.lInlineBlock,
        'u-block': this.lBlock,
        'u-inline-flex': this.lInlineFlex,
        'u-this-overlay': this.lOverlay,
        'u-hide-overflow': this.hideOverflow,
        'u-hide': this.hide,
        'u-disabled': this.disabled,
        'u-unselectable': this.unselectable,
        'u-clear-left': this.clearLeft,
        'u-clear-right': this.clearRight,
        'u-clear-both': this.clearBoth,
        'u-pull-left': this.pullLeft,
        'u-pull-right': this.pullRight,
        'u-center': this.center,
        'u-center-alt': this.centerAlt,
        'u-vertical-center': this.vCenter,
        'u-horizontal-center': this.hCenter,
        'u-text-center': this.textCenter,
        'u-text-left': this.textLeft,
        'u-text-right': this.textRight,
        'u-box': this.box,
        'u-fill-width': this.fillWidth,
        'u-round': this.round,
        'u-circle': this.circle,
        'u-no-margin': this.noMargin,
        'u-no-padding': this.noPadding,
        'font-thin': this.font === 'thin',
        'font-light': this.font === 'light',
        'font-semibold': this.font === 'semibold',
        'font-bold': this.font === 'bold',
        'u-hide-mobile': this.hideMobile,
        'u-hide-tablet': this.hideTablet,
        'u-hide-tablet-only': this.hideTabletOnly,
        'u-hide-desktop': this.hideDesktop,
      };
    },
  },
};
