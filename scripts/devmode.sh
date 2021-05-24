#!/bin/bash

/* eslint-disable */ import { createApp } from "vue";
import App from "./App.vue";
createApp(App)
  .use(install)
  .mount("#app");

sed '21 i \
/* eslint-disable */ /* Remove this line, whenever you are ready to commit */ import { createApp } from "vue";import App from "./App.vue";createApp(App).use(install).mount("#app");
' src/main.js > tmpfile.js;
mv tmpfile.js src/main.js

cat > src/App.vue << ENDOFFILE
<template>
  <div id="app">
    <v-container class="mt-8">
      <v-btn>Dev</v-btn>
    </v-container>
  </div>
</template>
ENDOFFILE
