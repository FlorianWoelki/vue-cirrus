<template>
  <div id="snackbar" :class=classes>
    <slot></slot>
  </div>
</template>

<script>
import Layout from '@/mixins/layout';
import Animations from '@/mixins/animations';

export default {
  mixins: [
    Layout,
    Animations,
  ],

  data() {
    return {
      isActive: false,
    };
  },

  props: {
    value: {
      type: Boolean,
      default: false,
    },
    bottomLeft: {
      type: Boolean,
      default: false,
    },
    bottomRight: {
      type: Boolean,
      default: false,
    },
    bottomCenter: {
      type: Boolean,
      default: false,
    },
    topLeft: {
      type: Boolean,
      default: false,
    },
    topRight: {
      type: Boolean,
      default: false,
    },
    topCenter: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    setTimeout() {
      if (!this.isActive) {
        const snackbar = document.getElementById('snackbar');
        snackbar.classList.add('show');
        this.isActive = true;

        setTimeout(() => {
          this.isActive = false;
          snackbar.classList.remove('show');
        }, 3000);
      }
    },
  },

  watch: {
    value() {
      this.setTimeout();
    },
  },

  computed: {
    classes() {
      return Object.assign(
        this.layoutMixins,
        this.animationsMixins,
        {
          snackbar: true,
          'bottom-left': this.bottomLeft,
          'bottom-right': this.bottomRight,
          'bottom-center': this.bottomCenter,
          'top-left': this.topLeft,
          'top-right': this.topRight,
          'top-center': this.topCenter,
        },
      );
    },
  },
};
</script>

<style>
.snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
}

.snackbar.top-center {
  top: 15px;
  left: 50%;
}
.snackbar.top-left {
  top: 15px;
  left: 141px;
}
.snackbar.top-right {
  top: 15px;
  right: 18px;
}

.snackbar.bottom-center {
  bottom: 30px;
  left: 50%;
}
.snackbar.bottom-left {
  bottom: 30px;
  left: 141px;
}
.snackbar.bottom-right {
  bottom: 30px;
  right: 18px;
}

.snackbar.bottom-center.show,
.snackbar.bottom-left.show,
.snackbar.bottom-right.show {
  visibility: visible;
  /* TODO: Add other animation */
  animation: fadeinBottom 0.5s, fadeoutBottom 0.5s 2.5s;
}

.snackbar.top-center.show,
.snackbar.top-left.show,
.snackbar.top-right.show {
  visibility: visible;
  /* TODO: Add other animation */
  animation: fadeinTop 0.5s, fadeoutTop 0.5s 2.5s;
}

@-webkit-keyframes fadeinTop {
  from {top: 0; opacity: 0;}
  to {top: 15px; opacity: 1;}
}
@keyframes fadeinTop {
  from {top: 0; opacity: 0;}
  to {top: 15px; opacity: 1;}
}

@-webkit-keyframes fadeoutTop {
  from {top: 15px; opacity: 1;}
  to {top: 0; opacity: 0;}
}
@keyframes fadeoutTop {
  from {top: 15px; opacity: 1;}
  to {top: 0; opacity: 0;}
}

@-webkit-keyframes fadeinBottom {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}
@keyframes fadeinBottom {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeoutBottom {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}
@keyframes fadeoutBottom {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}
</style>
