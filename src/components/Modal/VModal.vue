<template>
  <div
    :class=modalClasses
    :id=mId
  >
    <a
      :href=closeTarget
      class="modal-overlay close-btn"
      aria-label="Close"
    ></a>
    <div
      class="modal-content"
      role="document"
    >
      <div class="modal-header">
        <a
          :href=closeTarget
          class="u-pull-right"
          aria-label="Close"
          style="font-size: 20px;"
        >X</a>
        <div class="modal-title">{{title}}</div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Modal Dialog',
    },
    closeTarget: {
      type: String,
      default: '#target',
    },
    mId: {
      type: String,
      default: 'modal',
    },
    small: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    zoomIn: {
      type: Boolean,
      default: false,
    },
    zoomOut: {
      type: Boolean,
      default: false,
    },
    dropdown: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    modalClasses() {
      const modalClasses = {
        modal: true,
        'modal-large': this.large,
        'modal-small': this.small,
        'modal-animated--zoom-in': this.zoomIn,
        'modal-animated--zoom-out': this.zoomOut,
        'modal-animated--dropdown': this.dropdown,
        dark: this.dark,
      };

      return modalClasses;
    },
  },
};
</script>

<style>
.modal.dark .modal-content {
  background-color: #272727;
  color: white;
}
</style>
