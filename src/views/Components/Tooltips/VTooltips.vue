<template>
  <section class="tooltips-mixin">
    <p>This mixin can almost applied to any Vue Cirrus component!</p>

    <p>Short Demo</p>

    <v-row>
      <v-col
        c3
        center
      >
        <v-btn tooltipText="Standard Tooltip">Standard</v-btn>
      </v-col>
      <v-col
        c3
        center
      >
        <v-btn
          tooltipText="Bottom Tooltip"
          tooltipBottom
        >Bottom</v-btn>
      </v-col>
      <v-col
        c3
        center
      >
        <v-btn
          tooltipText="Left Tooltip"
          tooltipLeft
        >Left</v-btn>
      </v-col>
      <v-col
        c3
        center
      >
        <v-btn
          tooltipText="Right Tooltip"
          tooltipRight
        >Right</v-btn>
      </v-col>
    </v-row>

    <v-space xlarge />

    <v-row>
      <v-col>
        <span>Code example</span>
        <v-code lang="Vue">
          <xmp v-html=code></xmp>
        </v-code>
      </v-col>
    </v-row>

    <v-space xlarge />

    <h6>API (props)</h6>
    <API :data="props" hideMixins=true />
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
      code: `<v-btn
  tooltipText="Right Tooltip"
  tooltipRight
>Btn</v-btn>`,
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
