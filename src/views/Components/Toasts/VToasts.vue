<template>
  <section class="toast-component">
    <p class="no-upper-margin">
      With the <kbd>v-toast</kbd> component, you can display information or
      simple meta data to notify the user.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Toasts in their simples form just contain the title and some text.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Toasts/#!"
      component="v-toast"
      :componentProps="propsData"
    >
      <template v-slot:component>
        <v-toast
          disableCloseFunction
          :title="propsData.title"
          :closable="propsData.closable"
          :color="propsData.color"
        >Customize Me</v-toast>
      </template>
      <v-row>
        <v-col c="4" class="u-center">
          <v-input-field
            placeholder="Title ..."
            v-model="propsData.title"
          ></v-input-field>
        </v-col>
        <v-col c="4" class="u-center">
          <v-checkbox
            @change="() => { propsData.closable = !propsData.closable }"
          >Closable</v-checkbox>
        </v-col>
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
            >Success</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Warning</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Error</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Info</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.color = event.srcElement.innerHTML.toLowerCase() }"
            >Link</v-dropdown-item>
          </v-dropdown>
        </v-col>
      </v-row>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-toast']" />

    <v-space xlarge />
    <v-space xlarge />
    <h3>Examples</h3>
    <h5 class="font-light no-upper-margin">Color</h5>
    <p class="no-upper-margin">
      You can apply different colors to the default one to the toast component.
    </p>
    <ToastColors />

    <v-space />
    <h5 class="font-light no-upper-margin">Closable</h5>
    <p class="no-upper-margin">
      With the <kbd>closable</kbd> property it is possible to activate
      a functionality to close the toast. Furthermore there is a property
      called <kbd>disableCloseFunction</kbd> to disable the close functionality.
    </p>
    <ToastClosable />
  </section>
</template>

<script>
import API from '@/views/Components/API.vue';
import Playground from '@/components/Playground/Playground.vue';
import ToastColors from '@/views/Components/Toasts/Examples/ToastColors.vue';
import ToastClosable from '@/views/Components/Toasts/Examples/ToastClosable.vue';

export default {
  components: {
    API,
    Playground,
    ToastColors,
    ToastClosable,
  },

  data() {
    return {
      propsData: {
        title: 'Customize Me',
        closable: false,
        color: '',
      },
      props: [
        ['v-toast', 'title', 'string', 'empty', 'Customize the title of this toast component.'],
        ['v-toast', 'closable', 'boolean', 'false', 'Displays the close button in the top right corner.'],
        ['v-toast', 'disableCloseFunction', 'boolean', 'false', 'Disables the close functionality of the close button.'],
        ['v-toast', 'color', 'string', 'null', 'Set the color for the toast component (primary, success, warning, error, info, link).'],
      ],
    };
  },
};
</script>
