<template>
  <v-row class="btn-example-section">
    <v-col c="4">
      <v-btn color="primary" class="u-center" tooltipText="Hello World">Normal</v-btn>
      <v-btn
        color="primary"
        class="u-center" tooltipText="Hello World" tooltipPosition="topLeft">Top Left</v-btn>
      <v-btn
        color="primary"
        class="u-center" tooltipText="Hello World" tooltipPosition="topRight">Top Right</v-btn>
    </v-col>
    <v-col c="4">
      <v-btn color="info" class="u-center" tooltipText="Hello World" tooltipPosition="bottom">
        Bottom
      </v-btn>
      <v-btn
        color="info"
        class="u-center" tooltipText="Hello World" tooltipPosition="bottomLeft">
        Bottom Left
      </v-btn>
      <v-btn
        color="info"
        class="u-center" tooltipText="Hello World" tooltipPosition="bottomRight">
        Bottom Right
      </v-btn>
    </v-col>
    <v-col c="4">
      <v-btn color="warning" class="u-center" tooltipText="Hello World" tooltipPosition="left">
        Left
      </v-btn>
      <v-btn color="warning" class="u-center" tooltipText="Hello World" tooltipPosition="right">
        Right
      </v-btn>
    </v-col>
  </v-row>
</template>
