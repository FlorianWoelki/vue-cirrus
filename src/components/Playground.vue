<template>
  <v-container>
    <h3>Playground</h3>
    <v-btn center>Customize Me</v-btn>

    <v-space />
    <v-divider center short />
    <v-space />

    <v-row>
      <v-col c4>
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
        <v-checkbox>Outline</v-checkbox>
      </v-col>
      <v-col c4>
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
      </v-col>
      <v-col c4>
        <v-radio-btn id="loading-left">Loading Left</v-radio-btn>
        <v-radio-btn id="loading-right">Loading Right</v-radio-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
