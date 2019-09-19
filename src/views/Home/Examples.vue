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
          title="Login Page"
          subtitleTags="Forms,Layout,Buttons"
          description="A dynamic, beautiful login process page."
          image="https://i.imgur.com/sV4Mc0R.png"
          github="https://github.com/FlorianWoelki/vue-cirrus/tree/gh-pages/src/views/Examples/LoginPage"
          href="#/examples/loginPage"
        />
      </v-col>
      <v-col c4>
        <ExampleCard
          title="Blog Page"
          subtitleTags="Layout,NavBar"
          description="This is a blog preview."
          image="https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png"
          github="https://github.com/FlorianWoelki/vue-cirrus/tree/gh-pages/src/views/Examples/BlogPage"
          href="#/examples/blogPage"
        />
      </v-col>
      <v-col c4>
        <ExampleCard
          title="Contact Page"
          subtitleTags="Forms,Layout,Animations"
          description="A dynamic and animated contact page."
          image="https://i.imgur.com/Hgw5YM1.png"
          github="https://github.com/FlorianWoelki/vue-cirrus/tree/gh-pages/src/views/Examples/ContactPage"
          href="#/examples/contactPage"
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
