<template>
  <div
    id="snackbar"
    :class=classes
  >
    <slot></slot>
  </div>
</template>

<script>
import Animations from '@/mixins/animations';

export default {
  mixins: [
    Animations,
  ],

  data() {
    return {
      isActive: false,
    };
  },

  props: {
    success: {
      type: Boolean,
      default: false,
    },
    warning: {
      type: Boolean,
      default: false,
    },
    danger: {
      type: Boolean,
      default: false,
    },
    info: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Boolean,
      default: false,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: false,
    },
    dark: {
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
      default: true,
    },
    value: {
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
          'success-snackbar': this.success,
          'warning-snackbar': this.warning,
          'danger-snackbar': this.danger,
          'info-snackbar': this.info,
          'link-snackbar': this.link,
          'primary-snackbar': this.primary,
          'light-snackbar': this.light,
          'dark-snackbar': this.dark,
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
  color: #eee;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
}

.snackbar.primary-snackbar {
  background: #f03d4d;
  color: #fff;
  border-color: #c21b2b;
}
.snackbar.info-snackbar {
  background: #2972fa;
  color: #fff;
  border-color: #205BC8;
}
.snackbar.link-snackbar {
  background: #5e5cc7;
  color: #fff;
  border-color: #4B499F;
}
.snackbar.dark-snackbar {
  background: #363636;
  color: #fff;
  border-color: #2B2B2B;
}
.snackbar.success-snackbar {
  background: #0dd157;
  color: #fff;
  border-color: #0AA746;
}
.snackbar.warning-snackbar {
  background: #fab633;
  color: #fff;
  border-color: #C89028;
}
.snackbar.danger-snackbar {
  background: #fb4143;
  color: #fff;
  border-color: #C83436;
}
.snackbar.light-snackbar {
  background: #f6f9fc;
  color: #000;
  border-color: #C4C7C9;
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
  -webkit-animation: fadeinBottom 0.5s, fadeoutBottom 0.5s 2.5s;
  -moz-animation: fadeinBottom 0.5s, fadeoutBottom 0.5s 2.5s;
  -o-animation: fadeinBottom 0.5s, fadeoutBottom 0.5s 2.5s;
  animation: fadeinBottom 0.5s, fadeoutBottom 0.5s 2.5s;
}

.snackbar.top-center.show,
.snackbar.top-left.show,
.snackbar.top-right.show {
  visibility: visible;
  -webkit-animation: fadeinTop 0.5s, fadeoutTop 0.5s 2.5s;
  -moz-animation: fadeinTop 0.5s, fadeoutTop 0.5s 2.5s;
  -o-animation: fadeinTop 0.5s, fadeoutTop 0.5s 2.5s;
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
