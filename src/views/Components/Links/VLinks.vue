<template>
  <section class="links-component">
    <p class="no-upper-margin">
      To make really cool bottom navigation menus, you can use the
      <kbd>v-next-prev</kbd> component.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Pagination in their simples form have no border and a hover color.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Links/#!"
      component="v-link"
      :componentProps="propsData"
    >
      <template v-slot:component>
        <div class="u-text-center">
          <v-link
            :ltr="propsData.animation === 'ltr'"
            :rtl="propsData.animation === 'rtl'"
            :c="propsData.animation === 'c'"
            :oltr="propsData.animation === 'oltr'"
            :ortl="propsData.animation === 'ortl'"
            :oc="propsData.animation === 'oc'"
            :olr="propsData.animation === 'olr'"
            :orl="propsData.animation === 'orl'"
            :squared="propsData.animation === 'squared'"
            :dSquared="propsData.animation === 'dSquared'"
          >Customize Me</v-link>
        </div>
      </template>
      <v-row>
        <v-col center c12>
          <v-dropdown>
            <template v-slot:button>
              <v-dropdown-btn>
                Animation <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
              </v-dropdown-btn>
            </template>
            <v-dropdown-item
              @click="(event) => { propsData.animation = 'ltr' }"
            >Left to Right</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.animation = 'rtl' }"
            >Right to Left</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.animation = 'c' }"
            >Center</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.animation = 'oltr' }"
            >Outline Left to Right</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.animation = 'ortl' }"
            >Outline Right to Left</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.animation = 'oc' }"
            >Outline Center</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.animation = 'olr' }"
            >Outline Left Right</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.animation = 'orl' }"
            >Outline Right Left</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.animation = 'squared' }"
            >Squared</v-dropdown-item>
            <v-dropdown-item
              @click="(event) => { propsData.animation = 'dSquared' }"
            >Delayed Squared</v-dropdown-item>
          </v-dropdown>
        </v-col>
      </v-row>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-link']" />

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
        ['v-link', 'href', 'string', '#', 'Set the href for the link.'],
        ['v-link', 'blank', 'boolean', 'false', 'When someone clicks the link, the link will open in a new tab.'],
        ['v-link', 'ltr', 'boolean', 'false', 'The link will have the left to right underline animation.'],
        ['v-link', 'rtl', 'boolean', 'false', 'The link will have the right to left underline animation.'],
        ['v-link', 'c', 'boolean', 'false', 'The link will have the center underline animation.'],
        ['v-link', 'oltr', 'boolean', 'false', 'The link will have the right to left underline animation.'],
        ['v-link', 'ortl', 'boolean', 'false', 'The link will have the right to left underline animation.'],
        ['v-link', 'oc', 'boolean', 'false', 'The link will have the right to left underline animation.'],
        ['v-link', 'olr', 'boolean', 'false', 'The link will have the right to left underline animation.'],
        ['v-link', 'orl', 'boolean', 'false', 'The link will have the right to left underline animation.'],
        ['v-link', 'squared', 'boolean', 'false', 'The link will have the right to left underline animation.'],
        ['v-link', 'dSquared', 'boolean', 'false', 'The link will have the right to left underline animation.'],
        ['v-link', 'underlined', 'boolean', 'false', 'Simply underline the link.'],
        ['v-link', '@click', 'function', '() => {}', 'Catch the event, when someone clicks the link.'],
      ],
    };
  },
};
</script>
