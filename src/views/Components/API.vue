<template>
  <div class="api">
    <v-dropdown>
      <template v-slot:button>
        <v-dropdown-btn link>
          v-btn <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
        </v-dropdown-btn>
      </template>
      <v-dropdown-item>v-btn</v-dropdown-item>
      <v-dropdown-item>v-btn-group</v-dropdown-item>
    </v-dropdown>

    <v-space style="margin: 0; padding: 5px;" />
    <div class="api-props-section">
      <div class="api-prop" v-for="(prop, index) in props" :key="index">
        <v-row>
          <v-col c4>
            <span class="u-no-margin prop-subtitle">Name</span>
            <p class="font-bold text-primary u-no-margin prop-title">{{prop[0]}}</p>
          </v-col>
          <v-col c4>
            <span class="u-no-margin prop-subtitle">Type</span>
            <p class="font-bold u-no-margin prop-title">{{prop[1]}}</p>
          </v-col>
          <v-col c4>
            <span class="u-no-margin prop-subtitle">Default</span>
            <p class="font-bold u-no-margin prop-title">{{prop[2]}}</p>
          </v-col>
        </v-row>
        <v-row class="prop-description">
          <v-col c12>
            <span class="u-no-margin prop-subtitle">Description</span>
            <p class="u-no-margin prop-title">{{prop[3]}}</p>
          </v-col>
        </v-row>
        <v-divider v-if="index !== props.length - 1" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      props: this.data,
    };
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
