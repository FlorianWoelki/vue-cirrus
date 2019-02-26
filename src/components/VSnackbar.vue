<template>
  <div id="snackbar" :class=classes>
    <slot></slot>
  </div>
</template>

<script>
export default {
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
    left: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
    center: {
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
      return {
        snackbar: true,
        left: this.left,
        right: this.right,
        center: this.center,
      };
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
  bottom: 30px;
}

.snackbar.center {
  left: 50%;
}
.snackbar.left {
  left: 141px;
}
.snackbar.right {
  right: 18px;
}

.snackbar.show {
  visibility: visible;
  /* TODO: Add other animation */
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}
@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}
@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}
</style>
