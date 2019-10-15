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
    <API :data="props" :dropdownItems="['v-btn', 'v-btn-group']" />

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
      props: [
        ['v-btn', 'animated', 'boolean', 'false', 'This is a onclick effect and it will animate the button, if a user clicked on the button.'],
        ['v-btn', 'disabled', 'boolean', 'false', 'With this property the button will be disabled.'],
        ['v-btn', 'outline', 'boolean', 'false', 'Apply the outline styling with this property.'],
        ['v-btn', 'loadingLeft', 'boolean', 'false', 'This will add a loading circle on the left of the button.'],
        ['v-btn', 'loadingRight', 'boolean', 'false', 'This will add a loading circle on the right of the button.'],
        ['v-btn', 'pilled', 'boolean', 'false', 'This will turn the button to a round shaped button.'],
        ['v-btn', 'circle', 'boolean', 'false', 'This will turn the button to a circle shaped button.'],
        ['v-btn', 'href', 'string', 'empty', 'Whenever a button is pressed it can guide you to a other link.'],
        ['v-btn', 'blank', 'boolean', 'false', 'With this property the specified link will open in a new tab.'],
        ['v-btn', 'primary', 'boolean', 'false', 'The primary color is a sweet red.'],
        ['v-btn', 'transparent', 'boolean', 'false', 'The transparent color gives you a transparent button background.'],
        ['v-btn', 'light', 'boolean', 'false', 'The light color is a light gray background color.'],
        ['v-btn', 'dark', 'boolean', 'false', 'The dark color gives you a dark gray background button color.'],
        ['v-btn', 'black', 'boolean', 'false', 'This color gives you a completly black button background color.'],
        ['v-btn', 'info', 'boolean', 'false', 'The info color is a sweet blue background color.'],
        ['v-btn', 'link', 'boolean', 'false', 'The link color is a sweet purple background color.'],
        ['v-btn', 'success', 'boolean', 'false', 'With this property you give the button background color a green look.'],
        ['v-btn', 'warning', 'boolean', 'false', 'The warning color is a orange button background color.'],
        ['v-btn', 'danger', 'boolean', 'false', 'Here you can add a notifying red background color.'],
        ['v-btn', 'tiny', 'boolean', 'false', 'This is the smallest size for a button.'],
        ['v-btn', 'small', 'boolean', 'false', 'This size is smaller than the normal one, but still larger than tiny.'],
        ['v-btn', 'large', 'boolean', 'false', 'This size is larger than the normal button size.'],
        ['v-btn', 'xlarge', 'boolean', 'false', 'This is the largest size for a button.'],
        ['v-btn-group', 'filled', 'boolean', 'false', 'Fill all the buttons equally on one line.'],
      ],
    };
  },
};
</script>

<style>
.btn-example-section button {
  margin-top: 10px;
}
</style>
