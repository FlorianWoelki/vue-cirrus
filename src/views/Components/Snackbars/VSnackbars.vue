<template>
  <section class="snackbar-component">
    <p class="no-upper-margin">
      With the <kbd>v-snackbar</kbd> you can notify the user for taking
      a action. For example, if someone does something successful, you can
      display that easily with a notify information.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Snackbars in their simplest form are dark gray and in the top center.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Snackbars/#!"
      component="v-snackbar"
      :componentProps="propsData"
    >
      <template v-slot:component>
        <v-btn class="u-center" @click="() => { snackbar = !snackbar; }">Show</v-btn>
        <v-snackbar
          v-model="snackbar"
          :color="propsData.color"
          :position="propsData.position"
        >Customize Me</v-snackbar>
      </template>
      <v-row>
        <v-col c="6" class="u-center">
          <v-dropdown>
            <template v-slot:button>
              <v-btn dropdown>
                Position <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
              </v-btn>
            </template>
            <v-dropdown-item
              @click="(event) => { propsData.position = 'topCenter' }"
            >TopCenter</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.position = 'topLeft' }"
            >TopLeft</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.position = 'topRight' }"
            >TopRight</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.position = 'bottomCenter' }"
            >BottomCenter</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.position = 'bottomLeft' }"
            >BottomLeft</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.position = 'bottomRight' }"
            >BottomRight</v-dropdown-item>
          </v-dropdown>
        </v-col>
        <v-col c="6" class="u-center">
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
            >Success</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Warning</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Danger</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Info</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Link</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Light</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Dark</v-dropdown-item>
          </v-dropdown>
        </v-col>
      </v-row>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-snackbar']" />

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
      snackbar: false,
      propsData: {
        color: '',
        position: 'topCenter',
      },
      props: [
        ['v-snackbar', 'color', 'string', 'null', 'Set the color of the snackbar (primary, success, warning, danger, light, dark, info, link).'],
        ['v-snackbar', 'position', 'string', 'null', 'Set the position of the snackbar (topCenter, topLeft, topRight, bottomCenter, bottomLeft, bottomRight).'],
      ],
    };
  },
};
</script>
