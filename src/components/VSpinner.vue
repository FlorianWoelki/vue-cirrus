<template>
  <div class="loader-wrapper">
    <span class="loader"><span class="loader-inner"></span></span>
  </div>
</template>

<script>
export default {
  props: {
    fadeOut: {
      type: Number,
      default: 40,
    },
    delay: {
      type: Number,
      default: 1000,
    },
  },

  mounted() {
    setTimeout(() => {
      const s = document.getElementsByClassName('loader-wrapper')[0].style;
      s.opacity = 1;
      const { fadeOut } = this.$props;
      (function fade() { (s.opacity -= 0.1) < 0 ? s.display = 'none' : setTimeout(fade, fadeOut); })(); // eslint-disable-line
    }, this.delay);
  },
};
</script>


<style scoped>
body {
  background-color: #242F3F;
}

.loader-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #242f3f;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  display: inline-block;
  width: 30px;
  height: 30px;
  position: relative;
  border: 4px solid #Fff;
  animation: loader 2s infinite ease;
}

.loader-inner {
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: #fff;
  animation: loader-inner 2s infinite ease-in;
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(180deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes loader-inner {
  0% {
    height: 0%;
  }

  25% {
    height: 0%;
  }

  50% {
    height: 100%;
  }

  75% {
    height: 100%;
  }

  100% {
    height: 0%;
  }
}
</style>
