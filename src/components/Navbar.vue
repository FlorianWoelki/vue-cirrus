<template>
  <v-navbar dark title="Vue Cirrus">
    <div class="nav-left">
      <v-navbar-item link="https://github.com/FlorianWoelki/vue-cirrus">
        <i class="fab fa-github fa-lg"></i>
      </v-navbar-item>
      <v-navbar-item link="https://www.npmjs.com/package/vue-cirrus">
        <i class="fab fa-npm fa-lg"></i>
      </v-navbar-item>
    </div>

    <div class="nav-right">
      <v-nav-dropdown animated>
        <template v-slot:title><i class="fas fa-file-alt fa-lg"></i> Docs</template>
        <v-nav-dropdown-item v-for="name in components" :key="name">
          {{name}}
        </v-nav-dropdown-item>
      </v-nav-dropdown>
    </div>
  </v-navbar>
</template>

<script>
export default {
  data() {
    return {
      components: [
        'Component 1',
        'Component 2',
        'Component 3',
        'Component 4',
      ],
    };
  },
};
</script>
