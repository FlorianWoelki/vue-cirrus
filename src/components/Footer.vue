<template>
  <v-footer class="mt-16 footer-section u-text-center">
    <template #title>
      <h6 class="uppercase white">© 2021 Vue Cirrus</h6>
    </template>
    <v-divider short class="u-center"/>

    <p>
      Code is licensed with
      <v-link href="https://opensource.org/licenses/MIT" blank>MIT</v-link>.
      Everything is
      <span class="white">free</span> and
      <v-link href="https://github.com/FlorianWoelki/vue-cirrus" blank>open source</v-link>!
    </p>

    <p>
      Made with
      <i class="fa fa-heart animated pulse" aria-hidden="true"></i>
      by
      <span class="white">
        <v-link href="http://florianwoelki.com" blank>Florian Woelki</v-link>
      </span>
    </p>

    <v-space></v-space>

    <v-container>
      <v-row class="component-examples">
        <v-col v-for="i in 4" :key="i" c="3">
          <v-row class="u-center" v-for="j in 4" :key="j">
            <v-link :href="`#/components/${components[(i - 1) * 4 + (j - 1)]}`">
              {{ components[(i - 1) * 4 + (j - 1)] }}
            </v-link>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      components: [
        'Animations',
        'Avatars',
        'Badges',
        'Buttons',
        'Cards',
        'Code',
        'Forms',
        'Footer',
        'Grid',
        'Modals',
        'Pagination',
        'Snackbars',
        'Tabs',
        'Tags',
        'Toasts',
        'Tooltips',
      ],
    };
  },
};
</script>

<style lang="scss">
.footer-section {
  .fa-heart {
    color: #e90606;
    margin: 0 3px;
    font-size: 16px;
  }

  .component-examples .row {
    padding: 0;
  }
}
</style>
