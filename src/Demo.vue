<template>
  <div class="btn-container">
    <v-btn>Normal button</v-btn>
    <v-btn animated>Animated button</v-btn>
    <v-btn animated btnStyle="accent">Animated accent button</v-btn>
    <v-btn btnStyle="outline-inverted">Inverted outline button</v-btn>
    <v-btn btnStyle="transparent">Transparent button</v-btn>
    <v-btn btnStyle="light">Light Gray button</v-btn>
    <v-btn btnStyle="dark">Dark Gray button</v-btn>
    <v-btn btnStyle="black">Black button</v-btn>
    <v-btn tiny>Tiny button</v-btn>
    <v-btn small>Small button</v-btn>
    <v-btn large>Large button</v-btn>
    <v-btn extraLarge>Extralarge button</v-btn>

    <v-bgroup filled>
      <v-btn btnStyle="accent">First</v-btn>
      <v-btn btnStyle="accent">Second</v-btn>
      <v-btn btnStyle="accent">Third</v-btn>
    </v-bgroup>
  </div>
</template>

<script>
export default {
  name: 'Demo',
};
</script>
