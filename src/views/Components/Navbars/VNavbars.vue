<template>
  <section class="navbar-component">
    <p class="no-upper-margin">
      Easily create awesome and beautiful navbars with the
      <kbd>v-navbar</kbd> component.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Navbar in their simplest form are just white with a drop shadow.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Navbars/#!"
      component="v-navbar"
      :componentProps="propsData"
      :customCode="customCode"
    >
      <template v-slot:component>
        <v-navbar>
          <template v-slot:brandTitle>Brand</template>
          <v-nav-region position="left">
            <v-navbar-item>Left Item</v-navbar-item>
          </v-nav-region>
          <v-nav-region position="center">
            <v-navbar-item>Center Item</v-navbar-item>
          </v-nav-region>
          <v-nav-region position="right">
            <v-nav-dropdown animated>
              <template v-slot:title>Dropdown</template>
              <v-nav-dropdown-item>A</v-nav-dropdown-item>
            </v-nav-dropdown>
          </v-nav-region>
        </v-navbar>
      </template>
      <v-row>
        <v-col class="u-center" c="12">
        </v-col>
      </v-row>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API
      :data="props"
      :dropdownItems="[
        'v-navbar', 'v-navbar-item', 'v-nav-region', 'v-nav-dropdown', 'v-nav-dropdown-item'
      ]"
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
        ['v-navbar', 'brandLink', 'string', '#!', 'When there is a click on the brand title.'],
        ['v-navbar', 'fixed', 'boolean', 'false', 'Set the position of the navbar to fixed.'],
        ['v-navbar', 'clear', 'boolean', 'false', 'Set the style of the navbar to a transparent one.'],
        ['v-navbar', 'dark', 'boolean', 'false', 'Set the style of the navbar to dark.'],
        ['v-navbar', 'disableMobileNavbar', 'boolean', 'false', 'Disable the mobile navbar hamburger menu.'],
        ['v-navbar-item', 'href', 'string', 'empty', 'When there is a click on the navbar item.'],
        ['v-navbar-item', 'blank', 'boolean', 'false', 'Open the specific href in a new tab.'],
        ['v-navbar-item', 'selected', 'boolean', 'false', 'Set the state of the navbar item to selected.'],
        ['v-navbar-item', 'click', 'function', '() => {}', 'Get the event, when someone clicks on the navbar item.'],
        ['v-nav-region', 'position', 'string', 'null', 'Set the position of the alignment of the following navbar items (left, right, center).'],
        ['v-nav-dropdown', 'dropdownId', 'string', 'dropdown', 'Set the id of the dropdown button.'],
        ['v-nav-dropdown', 'clickable', 'boolean', 'false', 'When this enabled, you need to click on the dropdown for opening the dropdown menu.'],
        ['v-nav-dropdown', 'animated', 'boolean', 'false', 'Give the dropdown menu a animated style, when opening.'],
        ['v-nav-dropdown-item', 'href', 'string', '#', 'Specify the link for the dropdown item.'],
        ['v-nav-dropdown-item', 'blank', 'boolean', 'false', 'The link will open in a new tab.'],
      ],
    };
  },


  computed: {
    customCode() {
      return `
<v-navbar>
  <template v-slot:brandTitle>Brand</template>
  <v-nav-region position="left">
    <v-navbar-item>Left Item</v-navbar-item>
  </v-nav-region>
  <v-nav-region position="center">
    <v-navbar-item>Center Item</v-navbar-item>
  </v-nav-region>
  <v-nav-region position="right">
    <v-nav-dropdown animated>
      <template v-slot:title>Dropdown</template>
      <v-nav-dropdown-item>A</v-nav-dropdown-item>
    </v-nav-dropdown>
  </v-nav-region>
</v-navbar>
`;
    },
  },
};
</script>
