<template>
  <section class="parallax-element-component">
    <p class="no-upper-margin">
      You can use the <kbd>v-parallax-element</kbd> to create beautiful
      looking parallax animations on almost every single component.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Parallax Elements in their simplest form are just at mid speed with
      a valid stop value.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/ParallaxElement/#!"
      component="v-parallax-element"
      :componentProps="propsData"
      :customCode="customCode"
    >
      <template v-slot:component>
      </template>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API
      :data="props"
      :dropdownItems="['v-parallax-element']"
    />

    <v-space xlarge />
    <v-space xlarge />
    <h3>Examples</h3>
  </section>
</template>

<script>
import API from '@/views/Components/API.vue';
import Playground from '@/components/Playground/Playground.vue';

export default {
  components: {
    API,
    Playground,
  },

  data() {
    return {
      propsData: {
      },
      props: [
        ['v-parallax-element', 'speed', 'number', '0.5', 'With what speed the parallax element should behave.'],
        ['v-parallax-element', 'margin', 'number', '50', 'What margin the parallax element has on the bottom.'],
        ['v-parallax-element', 'stopValue', 'number', '600', 'When the parallax element should stop animating.'],
      ],
    };
  },


  computed: {
    customCode() {
      return `
`;
    },
  },
};
</script>
