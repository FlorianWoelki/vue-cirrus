<template>
  <div class="display-view">
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
          <v-dropdown-item @click="changeColor($event)">Primary</v-dropdown-item>
          <v-dropdown-item @click="changeColor($event)">Transparent</v-dropdown-item>
          <v-dropdown-item @click="changeColor($event)">Light</v-dropdown-item>
          <v-dropdown-item @click="changeColor($event)">Dark</v-dropdown-item>
          <v-dropdown-item @click="changeColor($event)">Black</v-dropdown-item>
          <v-dropdown-item @click="changeColor($event)">Info</v-dropdown-item>
          <v-dropdown-item @click="changeColor($event)">Link</v-dropdown-item>
          <v-dropdown-item @click="changeColor($event)">Success</v-dropdown-item>
          <v-dropdown-item @click="changeColor($event)">Warning</v-dropdown-item>
          <v-dropdown-item @click="changeColor($event)">Danger</v-dropdown-item>
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
        <v-radio-btn id="loading-left" @change="changeLoading($event)">Loading Left</v-radio-btn>
        <v-radio-btn id="loading-right" @change="changeLoading($event)">Loading Right</v-radio-btn>
      </v-col>
    </v-row>
  </div>
</template>
