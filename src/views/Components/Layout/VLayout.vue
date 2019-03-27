<template>
  <section class="layout">
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
        lInline: ['lInline', 'false', 'Boolean', 'Makes the container or element display inline like a span'],
        lInlineBlock: ['lInlineBlock', 'false', 'Boolean', 'The container is rendered as an inline element while its children are formatted as block-level boxes'],
        lBlock: ['lBlock', 'false', 'Boolean', 'The container is rendered as a block'],
        lInlineFlex: ['lInlineFlex', 'false', 'Boolean', 'Displays an element as an inline-level flex container'],
        lOverlay: ['lOverlay', 'false', 'Boolean', 'Displays element absolutely overlaying other elements'],
        clearLeft: ['clearLeft', 'false', 'Boolean', 'When using floats with other elements,moves element such that it is not overlapping an element with float-left'],
        clearRight: ['clearRight', 'false', 'Boolean', 'When using floats with other elements,moves element such that it is not overlapping an element with float-right'],
        clearBoth: ['clearBoth', 'false', 'Boolean', 'When using floats with other elements,moves element such that it is not overlapping any element with floats left or right'],
        pullLeft: ['pullLeft', 'false', 'Boolean', 'Makes an element float left'],
        pullRight: ['pullRight', 'false', 'Boolean', 'Makes an element float right'],
        center: ['center', 'false', 'Boolean', 'Centers an element using flexbox with automatic margin on the sides'],
        centerAlt: ['centerAlt', 'false', 'Boolean', 'Backwards compatible version of the center class that centers the element absolutely relative to the other elements'],
        vCenter: ['vCenter', 'false', 'Boolean', 'Centering elements vertically using flexbox'],
        hCenter: ['hCenter', 'false', 'Boolean', 'Centering elements horizontally using flexbox'],
        textCenter: ['textCenter', 'false', 'Boolean', 'Aligns text in the center'],
        textLeft: ['textLeft', 'false', 'Boolean', 'Aligns text in the left'],
        textRight: ['textRight', 'false', 'Boolean', 'Aligns text in the right'],
        box: ['box', 'false', 'Boolean', 'A box style for any div with a box shadow and 1 rem padding'],
        fillWidth: ['fillWidth', 'false', 'Boolean', 'Makes element width 100% of the parent container\'s width'],
        round: ['round', 'false', 'Boolean', 'Rounds the corner of the element'],
        circle: ['circle', 'false', 'Boolean', 'Turns the element into a circle'],
        noMargin: ['noMargin', 'false', 'Boolean', 'Removes margin from element'],
        noPadding: ['noPadding', 'false', 'Boolean', 'Removes padding from element'],
      },
    };
  },
};
</script>
