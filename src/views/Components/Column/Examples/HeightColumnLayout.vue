<template>
  <div class="column-example-height u-text-center">
    <v-row style="height: 300px;">
      <v-col
        v-for="i in range()"
        :key="i"
        :h="i"
        fluid
        class="column-showcase"
        style="margin-left: 10px;"
      >h="{{ i }}"</v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  methods: {
    range() {
      const result = [];
      for (let i = 10; i <= 100; i += 10) {
        result.push(`${i}`);
      }
      return result;
    },
  },
};
</script>
