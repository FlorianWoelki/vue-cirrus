<template>
  <section class="parallax-component">
    <h5>Parallax</h5>
    <p>
      You do not need to code anything with CSS!
      This component is for parallax images so easy to use!
    </p>

    <v-row>
      <v-col c6>
        <v-code
          lang="Vue"
          style="margin-top: 100px;"
        >
          <xmp v-html="code"></xmp>
        </v-code>
      </v-col>
      <v-col
        center
        c6
      >
        <v-parallax
          src="https://images.fineartamerica.com/images-medium-large-5/ampang-kuala-lumpur-city-skyline-at-night-blurred-background-jpldesigns.jpg"
          style="height: 500px;"
        >
          <h1 class="white">Hello World</h1>
        </v-parallax>
      </v-col>
    </v-row>

    <v-space xlarge />

    <h6>API (props)</h6>
    <API :data=props />

    <v-space
      xlarge
      v-for="i in 2"
      :key=i
    />
  </section>
</template>

<script>
import API from '@/views/Components/API.vue';

export default {
  components: {
    API,
  },

  data() {
    return {
      code: `<v-parallax
  src="background.jpg"
  style="height: 500px;"
>
  <h1>Hello World</h1>
</v-parallax>`,
      props: {
        splashId: ['splashId', 'splash-id', 'String', 'Id for the splash image'],
        src: ['src', 'empty', 'String', 'href for the image'],
      },
    };
  },
};
</script>
