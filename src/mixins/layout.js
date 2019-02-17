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
  },

  computed: {
    layoutClasses() {
      return {
        'this-inline': this.lInline,
        'this-inline-block': this.lInlineBlock,
        'this-block': this.lBlock,
        'this-inline-flex': this.lInlineFlex,
        'this-overlay': this.lOverlay,
      };
    },
  },
};
