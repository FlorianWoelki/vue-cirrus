<template>
  <div
    id="spinner"
    class="loader-wrapper"
  >
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
    backgroundColor: {
      type: String,
      default: '#242f3f',
    },
    fillColor: {
      type: String,
      default: '#fff',
    },
  },

  mounted() {
    document.getElementById('spinner').style.backgroundColor = this.backgroundColor;
    document.getElementsByClassName('loader-inner')[0].style.backgroundColor = this.fillColor;
    document.getElementsByClassName('loader')[0].style.borderColor = this.fillColor;

    setTimeout(() => {
      const s = document.getElementById('spinner').style;
      s.opacity = 1;
      const { fadeOut } = this.$props;
      (function fade() { (s.opacity -= 0.1) < 0 ? s.display = 'none' : setTimeout(fade, fadeOut); })(); // eslint-disable-line
    }, this.delay);
  },
};
</script>

<style scoped>
.loader-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  display: inline-block;
  width: 30px;
  height: 30px;
  position: relative;
  border: 4px solid rgb(255, 255, 255);
  animation: loader 2s infinite ease;
}

.loader-inner {
  vertical-align: top;
  display: inline-block;
  width: 100%;
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
