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
          :animation="propsData.animation"
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

    <v-space xlarge />
    <v-space xlarge />
    <h3>Examples</h3>
    <h5 class="font-light no-upper-margin">Different Animations</h5>
    <p class="no-upper-margin">
      You can apply really simple some cool and easy animations.
    </p>
    <DifferentAnimations />
  </section>
</template>

<script>
import Playground from '@/components/Playground/Playground.vue';
import API from '../API.vue';
import DifferentAnimations from './Examples/DifferentAnimations.vue';

export default {
  components: {
    API,
    Playground,
    DifferentAnimations,
  },

  data() {
    return {
      propsData: {
        infinite: false,
        animation: '',
      },
      props: [
        ['animation', 'infinite', 'boolean', 'false', 'The specified animation will be infinite.'],
        ['animation', 'paused', 'boolean', 'false', 'Pause the current running animation on the component.'],
        ['animation', 'animation', 'string', 'null', 'Set the animation (fadeIn, bounceIn, bounce, pulse, loadingLeft, loadingRight, hoverGrow).'],
      ],
    };
  },
};
</script>
