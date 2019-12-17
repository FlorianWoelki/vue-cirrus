<template>
  <section class="menus-component">
    <p class="no-upper-margin">
      You can create really easy, but beautiful menus with the
      <kbd>v-menu</kbd> component.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Menus in their best form are just simple menus. ;)
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Menus/#!"
      component="v-menu"
      :componentProps="propsData"
      :customCode="customCode"
    >
      <template v-slot:component>
        <v-menu>
          <v-menu-divider label="Projects"></v-menu-divider>
          <v-menu-item>
            <a href="#!">Project A</a>
          </v-menu-item>
          <v-menu-item>
            <a href="#!">Project B</a>
          </v-menu-item>
          <v-menu-item selected>
            <a href="#!">Project C</a>
          </v-menu-item>
          <v-menu-item>
            <v-menu>
              <v-menu-item>
                <a href="#!">A</a>
              </v-menu-item>
              <v-menu-item>
                <a href="#!">B</a>
              </v-menu-item>
            </v-menu>
          </v-menu-item>
        </v-menu>
      </template>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-menu-item', 'v-menu-divider']" />

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
      propsData: {},
      props: [
        ['v-menu-item', 'selected', 'boolean', 'false', 'Set the status of the menu item to selected.'],
        ['v-menu-divider', 'label', 'string', 'null', 'Set a label for the divider.'],
      ],
    };
  },


  computed: {
    customCode() {
      return `
<v-menu>
  <v-menu-divider label="Projects"></v-menu-divider>
  <v-menu-item>
    <a href="#!">Project A</a>
  </v-menu-item>
  <v-menu-item>
    <a href="#!">Project B</a>
  </v-menu-item>
  <v-menu-item selected>
    <a href="#!">Project C</a>
  </v-menu-item>
  <v-menu-item>
    <v-menu>
      <v-menu-item>
        <a href="#!">A</a>
      </v-menu-item>
      <v-menu-item>
        <a href="#!">B</a>
      </v-menu-item>
    </v-menu>
  </v-menu-item>
</v-menu>
`;
    },
  },
};
</script>
