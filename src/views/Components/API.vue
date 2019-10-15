<template>
  <div class="api">
    <v-btn v-if="dropdownItems.length === 1" link>{{dropdownItems[0]}}</v-btn>
    <v-dropdown v-else>
      <template v-slot:button>
        <v-dropdown-btn link>
          v-btn <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
        </v-dropdown-btn>
      </template>
      <v-dropdown-item
        v-for="dropdownItem in dropdownItems"
        :key="dropdownItem"
        @click="changeProperties($event)"
      >{{dropdownItem}}</v-dropdown-item>
    </v-dropdown>

    <v-space style="margin: 0; padding: 5px;" />
    <div class="api-props-section">
      <div
        class="api-props"
        v-for="(prop, index) in props"
        :key="index"
      >
        <div class="api-prop" v-if="prop[0] === currentDropdownItem">
          <v-row>
            <v-col c4>
              <span class="u-no-margin prop-subtitle">Name</span>
              <p class="font-bold text-primary u-no-margin prop-title">{{prop[1]}}</p>
            </v-col>
            <v-col c4>
              <span class="u-no-margin prop-subtitle">Type</span>
              <p class="font-bold u-no-margin prop-title">{{prop[2]}}</p>
            </v-col>
            <v-col c4>
              <span class="u-no-margin prop-subtitle">Default</span>
              <p class="font-bold u-no-margin prop-title">{{prop[3]}}</p>
            </v-col>
          </v-row>
          <v-row class="prop-description">
            <v-col c12>
              <span class="u-no-margin prop-subtitle">Description</span>
              <p class="u-no-margin prop-title">{{prop[4]}}</p>
            </v-col>
          </v-row>
          <v-divider v-if="index !== props.length - 1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'dropdownItems'],
  data() {
    return {
      props: this.data,
      currentDropdownItem: this.dropdownItems[0],
    };
  },

  methods: {
    changeProperties(event) {
      this.currentDropdownItem = event.srcElement.innerHTML;
    },
  },
};
</script>

<style>
.api .api-props-section {
  overflow: auto;
  max-height: 750px;
  border: 1px solid #d1d5da;
  border-radius: 3px;
}

.api button {
  margin-bottom: 0;
}

.api .prop-subtitle {
  font-size: 12px;
}
.api .prop-title {
  margin-top: -10px !important;
}
.api .prop-description {
  margin-top: -20px;
}
.api .divider {
  margin: 10px;
}
</style>
