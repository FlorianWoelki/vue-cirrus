<template>
  <footer class="footer-section">
    <v-row class="level">
      <v-col>
        <p class="white font-bold" style="letter-spacing: 0; font-size: 1.3rem;">
          <span class="faded">&copy; 2019</span>
          One Page
        </p>

        <v-divider></v-divider>

        <p>
          Code is licensed with
          <v-link href="https://opensource.org/licenses/MIT" blank>MIT</v-link>.
          Everything is <span class="white">free</span> and <v-link href="https://github.com/FlorianWoelki/vue-cirrus" blank>open source</v-link>!
        </p>

        <p>
          Made with <i class="fa fa-heart animated pulse" aria-hidden="true"></i>
          by <span class="white"><v-link href="http://florianwoelki.com" blank>Florian Woelki</v-link></span>
        </p>
      </v-col>
    </v-row>
  </footer>
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
