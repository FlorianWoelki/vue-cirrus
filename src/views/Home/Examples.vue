<template>
  <section id="examples">
    <div class="u-text-center">
      <h3 class="uppercase">Examples</h3>
      <h6 class="font-alt font-normal">
        Start off with a few examples and a few complete templates powered by Cirrus and Vue Cirrus.
      </h6>
    </div>

    <v-space />

    <v-row>
      <v-col c4>
        <ExampleCard
          title="Showdown"
          subtitle="afdler"
          description="Hello World"
          image="https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png"
        />
      </v-col>
      <v-col c4>
        <ExampleCard
          title="Showdown"
          subtitle="afdler"
          description="Hello World"
          image="https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png"
        />
      </v-col>
      <v-col c4>
        <ExampleCard
          title="Showdown"
          subtitle="afdler"
          description="Hello World Hello World Hello World Hello World
            Hello World Hello World Hello World"
          image="https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import ExampleCard from '@/components/ExampleCard.vue';

export default {
  components: {
    ExampleCard,
  },
};
</script>
