<template>
  <v-container>
    <h3>Playground</h3>
    <v-btn center>Customize Me</v-btn>
    <v-dropdown>
      <template v-slot:button>
        <v-dropdown-btn>
          Size <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
        </v-dropdown-btn>
      </template>
      <v-dropdown-item>xSmall</v-dropdown-item>
      <v-dropdown-item>Small</v-dropdown-item>
      <v-dropdown-item>Normal</v-dropdown-item>
      <v-dropdown-item>Large</v-dropdown-item>
      <v-dropdown-item>xLarge</v-dropdown-item>
    </v-dropdown>
  </v-container>
</template>
