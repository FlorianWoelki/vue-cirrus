#!/bin/bash

sed '21 i \
/* eslint-disable */ import Vue from "vue"; import App from "./App.vue";Vue.use(install);new Vue({render: h => h(App),}).$mount("#app");
' src/main.js > tmpfile.js;
mv tmpfile.js src/main.js

cat > src/App.vue << ENDOFFILE
<template>
  <div id="app">
    <v-btn>Dev</v-btn>
  </div>
</template>
ENDOFFILE
