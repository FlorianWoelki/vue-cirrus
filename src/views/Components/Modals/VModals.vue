<template>
  <section class="modals-component">
    <p class="no-upper-margin">
      Modals are there to create a small window in the browser
      itself. You can easily modify anything you want!
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Modals in their simplest form have no animation or size.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Modals/#!"
      component="v-menu"
      :componentProps="propsData"
      :customCode="customCode"
    >
      <template v-slot:component>
        <a href="#modal">
          <v-btn class="u-center" color="success">Open Modal</v-btn>
        </a>
        <v-modal
          :zoomIn="propsData.animation === 'zoomIn'"
          :zoomOut="propsData.animation === 'zoomOut'"
          :dropdown="propsData.animation === 'dropdown'"
          :small="propsData.size === 'small'"
          :large="propsData.size === 'large'"
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Explicabo ducimus dolorem excepturi facere architecto, quam commodi,
            tenetur corrupti a eveniet laborum labore distinctio doloremque
            eaque repellendus ab, culpa rem temporibus?
          </p>
        </v-modal>
      </template>
      <v-row>
        <v-col c="6" class="u-center">
          <v-dropdown>
            <template v-slot:button>
              <v-btn dropdown>
                Animation <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
              </v-btn>
            </template>
            <v-dropdown-item
              @click="(event) => { propsData.animation = 'zoomIn' }"
            >ZoomIn</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.animation = 'zoomOut' }"
            >ZoomOut</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.animation = 'dropdown' }"
            >Dropdown</v-dropdown-item>
          </v-dropdown>
        </v-col>
        <v-col c="6" class="u-center">
          <v-dropdown>
            <template v-slot:button>
              <v-btn dropdown>
                Size <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
              </v-btn>
            </template>
            <v-dropdown-item
              @click="(event) => { propsData.size = 'small' }"
            >Small</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.size = 'large' }"
            >Large</v-dropdown-item>
          </v-dropdown>
        </v-col>
      </v-row>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-modal']" />

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
        animation: '',
      },
      props: [
        ['v-modal', 'title', 'string', 'Modal Dialog', 'Set the title of the modal.'],
        ['v-modal', 'closeTarget', 'string', '#target', 'When the modal closes this will be the target link.'],
        ['v-modal', 'mId', 'string', 'modal', 'Set the original modal id for further reference.'],
        ['v-modal', 'small', 'boolean', 'false', 'Set the size of the modal to small.'],
        ['v-modal', 'large', 'boolean', 'false', 'Set the size of the modal to large.'],
        ['v-modal', 'zoomIn', 'boolean', 'false', 'Set the animation to zoom in.'],
        ['v-modal', 'zoomOut', 'boolean', 'false', 'Set the animation to zoom out.'],
        ['v-modal', 'dropdown', 'boolean', 'false', 'Set the animation to a dropdown.'],
      ],
    };
  },


  computed: {
    customCode() {
      return `
<a href="#modal">
  <v-btn class="u-center" color="success">Open Modal</v-btn>
</a>
<v-modal zoomIn large>
  <p>testing</p>
</v-modal>
`;
    },
  },
};
</script>
