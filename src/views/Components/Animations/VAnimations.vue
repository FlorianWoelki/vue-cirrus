<template>
  <section class="animations-mixin">
    <p class="no-upper-margin">
      You can almost apply those <kbd>animations</kbd> on every single vue-cirrus component.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      There are a some animations. Just try them out!
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Animations/#!"
      component="v-btn"
      :componentProps="propsData"
    >
      <template v-slot:component>
        <v-btn
          class="u-center"
          color="primary"
          :pulse="propsData.animation === 'pulse'"
          :fadeIn="propsData.animation === 'fadeIn'"
          :bounceIn="propsData.animation === 'bounceIn'"
          :bounce="propsData.animation === 'bounce'"
          :loadingLeft="propsData.animation === 'loadingLeft'"
          :loadingRight="propsData.animation === 'loadingRight'"
          :hoverGrow="propsData.animation === 'hoverGrow'"
          :infinite="propsData.infinite"
        >Customize Me</v-btn>
      </template>
      <v-row>
        <v-col c="12" class="u-center">
          <v-dropdown>
            <template v-slot:button>
              <v-btn dropdown>
                Animation <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
              </v-btn>
            </template>
            <v-dropdown-item
              @click="(event) => { propsData.animation = 'fadeIn' }"
            >FadeIn</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.animation = 'bounceIn' }"
            >BounceIn</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.animation = event.srcElement.innerHTML.toLowerCase() }"
            >Bounce</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.animation = event.srcElement.innerHTML.toLowerCase() }"
            >Pulse</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.animation = 'hoverGrow' }"
            >HoverGrow</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.animation = 'loadingLeft' }"
            >LoadingLeft</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.animation = 'loadingRight' }"
            >LoadingRight</v-dropdown-item>
          </v-dropdown>
          <v-checkbox
            @change="() => { propsData.infinite = !propsData.infinite }"
          >Infinite</v-checkbox>
        </v-col>
      </v-row>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['animation']" />
  </section>
</template>

<script>
import API from '../API.vue';
import Playground from '@/components/Playground/Playground.vue';

export default {
  components: {
    API,
    Playground,
  },

  data() {
    return {
      propsData: {
        infinite: false,
        animation: '',
      },
      props: [
        ['animation', 'infinite', 'boolean', 'false', 'The specified animation will be infinite.'],
        ['animation', 'fadeIn', 'boolean', 'false', 'Enable fade in animation. It will go from 0 opacity to 100 opacity.'],
        ['animation', 'bounceIn', 'boolean', 'false', 'Bounces in like a ball animation.'],
        ['animation', 'bounce', 'boolean', 'false', 'Bounces like a ball animation.'],
        ['animation', 'pulse', 'boolean', 'false', 'Heart pulsing animation'],
        ['animation', 'hoverGrow', 'boolean', 'false', 'When a users hovers on the component it will grow.'],
        ['animation', 'loadingLeft', 'boolean', 'false', 'Enable the loading circle on the left hand side.'],
        ['animation', 'loadingRight', 'boolean', 'false', 'Enable the loading circle on the right hand side.'],
      ],
    };
  },
};
</script>
