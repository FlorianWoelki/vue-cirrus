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
        <v-btn center @click="() => { snackbar = !snackbar; }">Show</v-btn>
        <v-snackbar
          v-model="snackbar"
          :primary="propsData.color === 'primary'"
          :success="propsData.color === 'success'"
          :warning="propsData.color === 'warning'"
          :light="propsData.color === 'light'"
          :dark="propsData.color === 'dark'"
          :danger="propsData.color === 'danger'"
          :info="propsData.color === 'info'"
          :link="propsData.color === 'link'"
          :bottomLeft="propsData.position === 'bottomLeft'"
          :bottomRight="propsData.position === 'bottomRight'"
          :bottomCenter="propsData.position === 'bottomCenter'"
          :topLeft="propsData.position === 'topLeft'"
          :topRight="propsData.position === 'topRight'"
          :topCenter="propsData.position === 'topCenter'"
        >Customize Me</v-snackbar>
      </template>
      <v-row>
        <v-col c6 center>
          <v-dropdown>
            <template v-slot:button>
              <v-dropdown-btn>
                Position <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
              </v-dropdown-btn>
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
        <v-col c6 center>
          <v-dropdown>
            <template v-slot:button>
              <v-dropdown-btn>
                Color <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
              </v-dropdown-btn>
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
        ['v-toast', 'title', 'string', 'empty', 'Customize the title of this toast component.'],
        ['v-toast', 'closable', 'boolean', 'false', 'Displays the close button in the top right corner.'],
        ['v-toast', 'disableCloseFunction', 'boolean', 'false', 'Disables the close functionality of the close button.'],
        ['v-toast', 'primary', 'boolean', 'false', 'The primary color is a red background color.'],
        ['v-toast', 'success', 'boolean', 'false', 'The success color is a green background color.'],
        ['v-toast', 'warning', 'boolean', 'false', 'The warning color is a orange background color.'],
        ['v-toast', 'error', 'boolean', 'false', 'The error color is a red background color.'],
        ['v-toast', 'info', 'boolean', 'false', 'The info color is a blue background color.'],
        ['v-toast', 'link', 'boolean', 'false', 'The link color is a purple background color.'],
      ],
    };
  },
};
</script>
