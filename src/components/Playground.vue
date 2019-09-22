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
      <v-dropdown-item>Test1</v-dropdown-item>
      <v-dropdown-item>Test2</v-dropdown-item>
      <v-dropdown-item>Test3</v-dropdown-item>
    </v-dropdown>
  </v-container>
</template>
