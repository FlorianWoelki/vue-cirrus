<template>
  <v-container>
    <h3>Playground</h3>
    <v-space xlarge />

    <div class="playground-card">
      <v-btn
        center
        :outline="outline"
        :tiny="size === 'tiny'"
        :small="size === 'small'"
        :large="size === 'large'"
        :xlarge="size === 'xlarge'"
      >Customize Me</v-btn>
    </div>

    <v-space />
    <v-divider center short />
    <v-space />

    <v-row>
      <v-col c4 center>
        <v-dropdown>
          <template v-slot:button>
            <v-dropdown-btn>
              Color <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
            </v-dropdown-btn>
          </template>
          <v-dropdown-item>Primary</v-dropdown-item>
          <v-dropdown-item>Transparent</v-dropdown-item>
          <v-dropdown-item>Light</v-dropdown-item>
          <v-dropdown-item>Dark</v-dropdown-item>
          <v-dropdown-item>Black</v-dropdown-item>
          <v-dropdown-item>Info</v-dropdown-item>
          <v-dropdown-item>Link</v-dropdown-item>
          <v-dropdown-item>Success</v-dropdown-item>
          <v-dropdown-item>Warning</v-dropdown-item>
          <v-dropdown-item>Danger</v-dropdown-item>
        </v-dropdown>
        <v-checkbox @change="changeOutline">Outline</v-checkbox>
      </v-col>
      <v-col c4 center>
        <v-dropdown>
          <template v-slot:button>
            <v-dropdown-btn>
              Size <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
            </v-dropdown-btn>
          </template>
          <v-dropdown-item @click="changeSize($event)">Tiny</v-dropdown-item>
          <v-dropdown-item @click="changeSize($event)">Small</v-dropdown-item>
          <v-dropdown-item @click="changeSize($event)">Normal</v-dropdown-item>
          <v-dropdown-item @click="changeSize($event)">Large</v-dropdown-item>
          <v-dropdown-item @click="changeSize($event)">xLarge</v-dropdown-item>
        </v-dropdown>
      </v-col>
      <v-col c4 center>
        <v-radio-btn id="loading-left">Loading Left</v-radio-btn>
        <v-radio-btn id="loading-right">Loading Right</v-radio-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      outline: false,
      size: 'normal',
    };
  },

  methods: {
    changeOutline() {
      this.outline = !this.outline;
    },
    changeSize(event) {
      this.size = event.srcElement.innerHTML.toLowerCase();
    },
  },
};
</script>

<style>
.playground-card {
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  transition: .3s;
  backface-visibility: hidden;
  box-shadow: 0 5px 12px 0 rgba(42, 51, 83, .12), 0 0 5px rgba(0, 0, 0, .06);
  margin-bottom: 1rem;
  padding: 1.5rem;
}
</style>
