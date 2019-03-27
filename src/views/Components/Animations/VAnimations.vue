<template>
  <section class="animations-mixin">
    <p>This mixin can almost applied to any Vue Cirrus component!</p>

    <h6>API (props)</h6>
    <API :data=props />
  </section>
</template>

<script>
import API from '../API.vue';

export default {
  components: {
    API,
  },

  data() {
    return {
      props: {
        infinite: ['infinite', 'false', 'Boolean', 'Animation will be infinite'],
        fadeIn: ['fadeIn', 'false', 'Boolean', 'Enable fade in animation'],
        bounceIn: ['bounceIn', 'false', 'Boolean', 'Enable bounce in animation'],
        bounce: ['bounce', 'false', 'Boolean', 'Enable bounce animation'],
        pulse: ['pulse', 'false', 'Boolean', 'Enable pulse animation'],
        hoverGrow: ['hoverGrow', 'false', 'Boolean', 'Enable hover grow animation'],
        loadingLeft: ['loadingLeft', 'false', 'Boolean', 'Enable loading left animation'],
        loadingRight: ['loadingRight', 'false', 'Boolean', 'Enable loading right animation'],
      },
    };
  },
};
</script>
