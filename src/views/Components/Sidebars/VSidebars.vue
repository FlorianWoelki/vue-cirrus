<template>
  <section class="sidebar-component">
    <p class="no-upper-margin">
      Simply use the <kbd>v-sidebar</kbd> component to create a easy to
      use sidebar.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Sidebars in their simplest form do have a padding.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Sidebars/#!"
      component="v-sidebar"
      :componentProps="propsData"
      :customCode="customCode"
    >
      <template v-slot:component>
        <v-sidebar>
          <template v-slot:title>
            <h5>Title</h5>
          </template>
          <v-sidebar-item>Item A</v-sidebar-item>
          <v-sidebar-item>Item B</v-sidebar-item>
          <v-sidebar-item>Item C</v-sidebar-item>
          <template v-slot:content>
            <v-sidebar-content>
              <h4>Sidebar Content</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Rem voluptatum ab tempora tempore voluptates laudantium ipsam
                at perspiciatis magni mollitia nulla, temporibus adipisci veniam
                delectus sed ad neque velit qui impedit dolor explicabo quisquam
                maiores modi. Odit eius, magni a illo repudiandae mollitia maiores,
                alias ea cupiditate, minus consectetur explicabo.
              </p>
            </v-sidebar-content>
          </template>
        </v-sidebar>
      </template>
      <v-row>
        <v-col c="6" class="u-center">
          <v-checkbox
            @change="() => { propsData.noPadding = !propsData.noPadding }"
          >No Padding</v-checkbox>
        </v-col>
        <v-col c="6" class="u-center">
          <v-checkbox
            @change="() => { propsData.hoverEffect = !propsData.hoverEffect }"
          >Hover Effect</v-checkbox>
        </v-col>
      </v-row>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API
      :data="props"
      :dropdownItems="['v-sidebar', 'v-sidebar-item', 'v-sidebar-dropdown']"
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
        hoverEffect: false,
        noPadding: false,
      },
      props: [
        ['v-sidebar', 'noPadding', 'boolean', 'false', 'Disable the padding of the content for the sidebar.'],
        ['v-sidebar', 'hoverEffect', 'boolean', 'false', 'Set the state of the hover effect for the sidebar items.'],
        ['v-sidebar-item', 'href', 'string', '#', 'Set the href for the sidebar item.'],
        ['v-sidebar-item', 'forId', 'string', 'treeitem', 'Set the for id for the sidebar item.'],
        ['v-sidebar-item', 'dropdown', 'boolean', 'false', 'Set this sidebar item to a dropdown item.'],
        ['v-sidebar-item', 'selected', 'boolean', 'false', 'Set the selected state of the sidebar item.'],
        ['v-sidebar-dropdown', 'showArrow', 'boolean', 'false', 'Shows the arrow for the dropdown menu.'],
        ['v-sidebar-dropdown', 'title', 'string', 'empty', 'Set the title of the dropdown item.'],
      ],
    };
  },


  computed: {
    customCode() {
      return `
<v-sidebar>
  <template v-slot:title>
    <h5>Title</h5>
  </template>
  <v-sidebar-item>Item A</v-sidebar-item>
  <v-sidebar-item>Item B</v-sidebar-item>
  <v-sidebar-item>Item C</v-sidebar-item>
  <template v-slot:content>
    <v-sidebar-content>
      <h4>Sidebar Content</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Rem voluptatum ab tempora tempore voluptates laudantium ipsam
        at perspiciatis magni mollitia nulla, temporibus adipisci veniam
        delectus sed ad neque velit qui impedit dolor explicabo quisquam
        maiores modi. Odit eius, magni a illo repudiandae mollitia maiores,
        alias ea cupiditate, minus consectetur explicabo.
      </p>
    </v-sidebar-content>
  </template>
</v-sidebar>
`;
    },
  },
};
</script>
