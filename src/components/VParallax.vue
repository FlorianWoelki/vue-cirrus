<template>
  <div :id=splashId class="hero fullscreen hero-img parallax-img">
    <div class="hero-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    splashId: {
      type: String,
      default: 'splash-img',
    },
    src: {
      type: String,
      default: '',
    },
  },

  mounted() {
    const splashDiv = document.getElementById(this.splashId);

    splashDiv.style.background = `url(${this.src})`;
    splashDiv.style.backgroundSize = 'cover';
  },
};
</script>
