<template>
  <v-navbar
    dark
    :fixed=fixed
    title="Vue Cirrus"
  >
    <div class="nav-left">
      <v-navbar-item link="https://github.com/FlorianWoelki/vue-cirrus">
        <i class="nav-icon fab fa-github fa-lg"></i>
      </v-navbar-item>
      <v-navbar-item link="https://www.npmjs.com/package/vue-cirrus">
        <i class="nav-icon fab fa-npm fa-lg"></i>
      </v-navbar-item>
    </div>

    <div class="nav-right">
      <v-navbar-item>
        <a href="/#/components">
          <i class="fas fa-file-alt fa-lg"></i>
          Docs
        </a>
      </v-navbar-item>
    </div>
  </v-navbar>
</template>

<script>
export default {
  props: {
    fixed: {
      type: Boolean,
      default: false,
    },
  },
};
</script>


<style>
.nav-icon {
  margin-top: 10px;
}
</style>
