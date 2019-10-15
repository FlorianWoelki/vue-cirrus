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
          image="login-page.png"
          github="https://github.com/FlorianWoelki/vue-cirrus/tree/gh-pages/src/views/Examples/LoginPage"
          href="#/examples/loginPage"
        />
      </v-col>
      <v-col c4>
        <ExampleCard
          title="One Page"
          subtitleTags="Layout,NavBar"
          description="This is a one page preview."
          image="one-page.png"
          github="https://github.com/FlorianWoelki/vue-cirrus/tree/gh-pages/src/views/Examples/OnePage"
          href="#/examples/onePage"
        />
      </v-col>
      <v-col c4>
        <ExampleCard
          title="Contact Page"
          subtitleTags="Forms,Layout,Animations"
          description="A dynamic and animated contact page."
          image="contact-page.png"
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
