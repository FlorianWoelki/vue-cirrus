<template>
  <section class="navbar-component">
    <p class="no-upper-margin">
      You can create easy <kbd>v-dropdown</kbd> buttons to choose multiple
      options from a set.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Dropdowns in their simplest form have only text and options.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Dropdowns/#!"
      component="v-dropdown"
      :componentProps="propsData"
      :customCode="customCode"
    >
      <template v-slot:component>
        <v-dropdown>
          <template v-slot:button>
            <v-btn dropdown>
              My Dropdown
            </v-btn>
          </template>
          <v-dropdown-item>Option A</v-dropdown-item>
          <v-dropdown-item>Option B</v-dropdown-item>
          <v-dropdown-item>Option C</v-dropdown-item>
        </v-dropdown>
        <v-space xlarge></v-space>
        <v-space xlarge></v-space>
        <v-space large></v-space>
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
      :dropdownItems="['v-dropdown', 'v-dropdown-item']"
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
        ['v-dropdown', 'right', 'boolean', 'false', 'Aligns the dropdown items to the right.'],
        ['v-dropdown', 'left', 'boolean', 'false', 'Aligns the dropdown items to the left.'],
        ['v-dropdown-item', 'href', 'string', 'null', 'Set the href of the dropdown item.'],
        ['v-dropdown-item', '@click', 'event', '() => {}', 'Catch the click event of the dropdown item.'],
      ],
    };
  },


  computed: {
    customCode() {
      return `
<v-dropdown>
  <template v-slot:button>
    <v-btn dropdown>
      My Dropdown
    </v-btn>
  </template>
  <v-dropdown-item>Option A</v-dropdown-item>
  <v-dropdown-item>Option B</v-dropdown-item>
  <v-dropdown-item>Option C</v-dropdown-item>
</v-dropdown>`;
    },
  },
};
</script>
