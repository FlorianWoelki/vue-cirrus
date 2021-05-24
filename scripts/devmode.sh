#!/bin/bash

sed '21 i \
/* eslint-disable */ /* Remove this line, whenever you are ready to commit */ import { createApp } from "vue";import App from "./App.vue";createApp(App).use(install).mount("#app");
' src/main.ts > tmpfile.ts;
mv tmpfile.ts src/main.ts

cat > src/App.vue << ENDOFFILE
<template>
  <div id="app">
    <v-container class="mt-8">
      <v-btn>Dev</v-btn>
    </v-container>
  </div>
</template>
ENDOFFILE
