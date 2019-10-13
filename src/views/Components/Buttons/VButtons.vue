<template>
  <section class="buttons-component">
    <p class="no-upper-margin">
      The <kbd>v-btn</kbd> component replaces the standard html button with a custom made
      Cirrus theme with a lot of options.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Buttons in their simplest form contain uppercase text
    </p>

    <v-space />
    <Playground noTitle href="/#/components/Buttons/#!" />

    <v-space xlarge />
    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" />

    <v-space xlarge />
    <v-space xlarge />
    <h3>Examples</h3>
    <h5 class="font-light no-upper-margin">Outline</h5>
    <p class="no-upper-margin">
      Outline buttons have only the borders and no background. Only on hover
      they show there background color.
    </p>
    <BtnOutline />

    <v-space xlarge />
    <h5 class="font-light no-upper-margin">Animated</h5>
    <p class="no-upper-margin">
      There is a option, where you can enable animated state, if someone has
      clicked on the button.
    </p>
    <BtnAnimated />

    <v-space xlarge />
    <h5 class="font-light no-upper-margin">Loading</h5>
    <p class="no-upper-margin">
      You can add a loading state for buttons. We do have a left and right
      loading animation for all buttons.
    </p>
    <BtnLoading />

    <v-space xlarge />
    <h5 class="font-light no-upper-margin">Types</h5>
    <p class="no-upper-margin">
      In Vue Cirrus we have 3 different types of buttons. You have the option
      to have a pilled, circle or normal button.
    </p>
    <BtnTypes />

    <v-space xlarge />
    <h5 class="font-light no-upper-margin">Groups</h5>
    <p class="no-upper-margin">
      There is a extra component for buttons, where you can group multiple
      buttons together to one huge compromised button.
    </p>
    <BtnGroup />

    <v-space xlarge v-for="i in 2" :key="i" />
  </section>
</template>

<script>
import API from '@/views/Components/API.vue';
import Playground from '@/components/Playground/Playground.vue';
import BtnOutline from '@/views/Components/Buttons/Examples/BtnOutline.vue';
import BtnLoading from '@/views/Components/Buttons/Examples/BtnLoading.vue';
import BtnTypes from '@/views/Components/Buttons/Examples/BtnTypes.vue';
import BtnAnimated from '@/views/Components/Buttons/Examples/BtnAnimated.vue';
import BtnGroup from '@/views/Components/Buttons/Examples/BtnGroup.vue';

export default {
  components: {
    API,
    Playground,
    BtnOutline,
    BtnLoading,
    BtnTypes,
    BtnAnimated,
    BtnGroup,
  },
  data() {
    return {
      props: {
        animated: ['animated', 'boolean', 'false', 'This is a onclick effect and it will animate the button, if a user clicked on the button.'],
        disabled: ['disabled', 'boolean', 'false', 'With this property the button will be disabled.'],
        loadingLeft: ['loadingLeft', 'boolean', 'false', 'This will add a loading circle on the left of the button.'],
        loadingRight: ['loadingRight', 'boolean', 'false', 'This will add a loading circle on the right of the button.'],
      },
    };
  },
};
</script>

<style>
.btn-example-section button {
  margin-top: 10px;
}
</style>
