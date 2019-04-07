<template>
  <footer class="footer-section">
    <v-row class="level">
      <v-col
        c4
        o4
      >
        <p
          class="white font-bold"
          style="letter-spacing: 0; font-size: 1.3rem;"
        >
          <span class="faded">&copy; 2019</span>
          Vue Cirrus
        </p>

        <v-divider />

        <p>
          Code is licensed with
          <a class="white" href="https://opensource.org/licenses/MIT" target="_blank">MIT</a>. Everything is <span class="white">free</span> to use!
        </p>

        <p>
          Made with <i
            class="fa fa-heart animated pulse"
            aria-hidden="true"
          ></i> by <span class="white">Florian Woelki</span>
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
