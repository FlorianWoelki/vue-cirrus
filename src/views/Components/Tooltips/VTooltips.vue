<template>
  <section class="tooltips-mixin">
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
        tooltipText: ['tooltipText', 'Empty', 'String', 'Set the text of the tooltip'],
        tooltipTopLeft: ['tooltipTopLeft', 'false', 'Boolean', 'Position of tooltip will be top left'],
        tooltipTopRight: ['tooltipTopRight', 'false', 'Boolean', 'Position of tooltip will be top right'],
        tooltipBottom: ['tooltipBottom', 'false', 'Boolean', 'Position of tooltip will be bottom'],
        tooltipBottomLeft: ['tooltipBottomLeft', 'false', 'Boolean', 'Position of tooltip will be bottom left'],
        tooltipBottomRight: ['tooltipBottomRight', 'false', 'Boolean', 'Position of tooltip will be bottom right'],
        tooltipLeft: ['tooltipLeft', 'false', 'Boolean', 'Position of tooltip will be on the left'],
        tooltipRight: ['tooltipRight', 'false', 'Boolean', 'Position of tooltip will be on the right'],
      },
    };
  },
};
</script>
