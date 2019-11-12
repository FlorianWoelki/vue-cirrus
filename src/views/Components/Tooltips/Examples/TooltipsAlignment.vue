<template>
  <v-row center class="btn-example-section">
    <v-col c4>
      <v-btn primary center tooltipText="Hello World">Normal</v-btn>
      <v-btn primary center tooltipText="Hello World" tooltipTopLeft>Top Left</v-btn>
      <v-btn primary center tooltipText="Hello World" tooltipTopRight>Top Right</v-btn>
    </v-col>
    <v-col c4>
      <v-btn info center tooltipText="Hello World" tooltipBottom>Bottom</v-btn>
      <v-btn info center tooltipText="Hello World" tooltipBottomLeft>Bottom Left</v-btn>
      <v-btn info center tooltipText="Hello World" tooltipBottomRight>Bottom Right</v-btn>
    </v-col>
    <v-col c4>
      <v-btn warning center tooltipText="Hello World" tooltipLeft>Left</v-btn>
      <v-btn warning center tooltipText="Hello World" tooltipRight>Right</v-btn>
    </v-col>
  </v-row>
</template>
