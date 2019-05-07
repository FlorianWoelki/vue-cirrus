<template>
  <section class="change-mode-component">
    <v-btn
      id="change-mode"
      :black=darkMode
      :onClick=onChangeModeClick
    >Change to {{darkMode ? 'light mode' : 'dark mode'}}</v-btn>
  </section>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
    };
  },

  methods: {
    onChangeModeClick() {
      this.darkMode = !this.darkMode;
      this.$store.dispatch({
        type: 'setDarkMode',
        darkMode: this.darkMode,
      });
    },
  },
};
</script>

<style>
#change-mode {
  position: absolute;
  top: 10px;
  right: 25px;
  z-index: 1000;
}
</style>
