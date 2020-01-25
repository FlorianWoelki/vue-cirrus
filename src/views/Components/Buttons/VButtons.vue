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
    <Playground
      noTitle
      href="/#/components/Buttons/#!"
      component="v-btn"
      :componentProps="propsData"
    >
      <template v-slot:component>
        <v-btn
          class="u-center"
          :outline="propsData.outline"
          :size="propsData.size"
          :color="propsData.color"
          :loadingLeft="propsData.loading === 'loadingLeft'"
          :loadingRight="propsData.loading === 'loadingRight'"
        >Customize Me</v-btn>
      </template>
      <v-row>
        <v-col c="4" class="u-center">
          <v-dropdown>
            <template v-slot:button>
              <v-btn dropdown>
                Color <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
              </v-btn>
            </template>
            <v-dropdown-item
              @click="(event) => { propsData.color = '' }"
            >Normal</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Primary</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Transparent</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Light</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Dark</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Black</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Info</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Link</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Success</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Warning</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Danger</v-dropdown-item>
          </v-dropdown>
          <v-checkbox
            @change="() => { propsData.outline = !propsData.outline }"
          >Outline</v-checkbox>
        </v-col>
        <v-col c="4" class="u-center">
          <v-dropdown>
            <template v-slot:button>
              <v-btn dropdown>
                Size <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
              </v-btn>
            </template>
            <v-dropdown-item
              @click="(event) => { propsData.size = event.srcElement.innerHTML.toLowerCase() }"
            >Tiny</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.size = event.srcElement.innerHTML.toLowerCase() }"
            >Small</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.size = '' }"
            >Normal</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.size = event.srcElement.innerHTML.toLowerCase() }"
            >Large</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.size = event.srcElement.innerHTML.toLowerCase() }"
            >xLarge</v-dropdown-item>
          </v-dropdown>
        </v-col>
        <v-col c="4" class="u-center">
          <v-radio-btn
            id="loadingLeft"
            @change="(event) => { propsData.loading = event.srcElement.id }"
          >Loading Left</v-radio-btn>
          <v-radio-btn
            id="loadingRight"
            @change="(event) => { propsData.loading = event.srcElement.id }"
          >Loading Right</v-radio-btn>
        </v-col>
      </v-row>
    </Playground>

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

    <v-space />
    <h5 class="font-light no-upper-margin">Animated</h5>
    <p class="no-upper-margin">
      There is a option, where you can enable animated state, if someone has
      clicked on the button.
    </p>
    <BtnAnimated />

    <v-space />
    <h5 class="font-light no-upper-margin">Loading</h5>
    <p class="no-upper-margin">
      You can add a loading state for buttons. We do have a left and right
      loading animation for all buttons.
    </p>
    <BtnLoading />

    <v-space />
    <h5 class="font-light no-upper-margin">Types</h5>
    <p class="no-upper-margin">
      In Vue Cirrus we have 3 different types of buttons. You have the option
      to have a pilled, circle or normal button.
    </p>
    <BtnTypes />

    <v-space />
    <h5 class="font-light no-upper-margin">Groups</h5>
    <p class="no-upper-margin">
      There is a extra component for buttons, where you can group multiple
      buttons together to one huge compromised button.
    </p>
    <BtnGroup />
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
      propsData: {
        outline: false,
        color: '',
        size: '',
        loading: '',
      },
      props: [
        ['v-btn', 'dropdown', 'boolean', 'false', 'Set this button to a dropdown button.'],
        ['v-btn', 'animated', 'boolean', 'false', 'This is a onclick effect and it will animate the button, if a user clicked on the button.'],
        ['v-btn', 'disabled', 'boolean', 'false', 'With this property the button will be disabled.'],
        ['v-btn', 'outline', 'boolean', 'false', 'Apply the outline styling with this property.'],
        ['v-btn', 'pilled', 'boolean', 'false', 'This will turn the button to a round shaped button.'],
        ['v-btn', 'circle', 'boolean', 'false', 'This will turn the button to a circle shaped button.'],
        ['v-btn', 'color', 'string', 'null', 'Set the color of the button (primary, transparent, light, dark, black, info, link, success, warning, danger).'],
        ['v-btn', 'size', 'string', 'null', 'Set the size of the button (tiny, small, large, xlarge).'],
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
