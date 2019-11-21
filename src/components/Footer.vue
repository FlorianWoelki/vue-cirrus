<template>
  <v-footer class="footer-section" title="© 2019 Vue Cirrus">
    <v-divider short center style="margin-top: 25px; margin-bottom: 25px;" />

    <p>
      Code is licensed with
      <v-link href="https://opensource.org/licenses/MIT" blank>MIT</v-link>.
      Everything is <span class="white">free</span> and <v-link href="https://github.com/FlorianWoelki/vue-cirrus" blank>open source</v-link>!
    </p>

    <p>
      Made with <i class="fa fa-heart animated pulse" aria-hidden="true"></i>
      by <span class="white"><v-link href="http://florianwoelki.com" blank>Florian Woelki</v-link></span>
    </p>

    <v-container>
      <v-row>
        <v-col c3>
          <v-link href="#/components/Avatars">Avatars</v-link>
          <v-link href="#/components/Badges">Badges</v-link>
          <v-link href="#/components/Buttons">Buttons</v-link>
          <v-link href="#/components/Cards">Cards</v-link>
        </v-col>
        <v-col c3>
          <v-link href="#/components/Code">Code</v-link>
          <v-link href="#/components/Forms">Forms</v-link>
          <v-link href="#/components/Footer">Footer</v-link>
          <v-link href="#/components/Grid">Grid</v-link>
        </v-col>
        <v-col c3>
          <v-link href="#/components/Modals">Modals</v-link>
          <v-link href="#/components/Pagination">Pagination</v-link>
          <v-link href="#/components/Snackbars">Snackbars</v-link>
          <v-link href="#/components/Tabs">Tabs</v-link>
        </v-col>
        <v-col c3>
          <v-link href="#/components/Tags">Tags</v-link>
          <v-link href="#/components/Toasts">Toasts</v-link>
          <v-link href="#/components/Animations">Animations</v-link>
          <v-link href="#/components/Tooltips">Tooltips</v-link>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style lang="scss">
.footer-section {
  .fa-heart {
    color: #E90606;
    margin: 0 3px;
    font-size: 16px;
  }
}
</style>
