<template>
  <v-row class="btn-example-section">
    <v-col c="4">
      <v-btn color="primary" class="u-center" tooltipText="Hello World">Normal</v-btn>
      <v-btn
        color="primary"
        class="u-center" tooltipText="Hello World" tooltipTopLeft>Top Left</v-btn>
      <v-btn
        color="primary"
        class="u-center" tooltipText="Hello World" tooltipTopRight>Top Right</v-btn>
    </v-col>
    <v-col c="4">
      <v-btn color="info" class="u-center" tooltipText="Hello World" tooltipBottom>Bottom</v-btn>
      <v-btn
        color="info"
        class="u-center" tooltipText="Hello World" tooltipBottomLeft>Bottom Left</v-btn>
      <v-btn
        color="info"
        class="u-center" tooltipText="Hello World" tooltipBottomRight>Bottom Right</v-btn>
    </v-col>
    <v-col c="4">
      <v-btn color="warning" class="u-center" tooltipText="Hello World" tooltipLeft>Left</v-btn>
      <v-btn color="warning" class="u-center" tooltipText="Hello World" tooltipRight>Right</v-btn>
    </v-col>
  </v-row>
</template>
