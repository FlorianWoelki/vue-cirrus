<template>
  <section class="links-component">
    <h5>Links</h5>
    <p>You can set just one property in the link component and it will animate automatically!</p>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <xmp v-html="code"></xmp>
        </v-code>
      </v-col>
      <v-col
        c6
        style="margin-top: 155px;"
      >
        <v-row center>
          <v-col c1>
            <v-link ltr>Link</v-link>
          </v-col>
          <v-col c1>
            <v-link rtl>Link</v-link>
          </v-col>
          <v-col c1>
            <v-link c>Link</v-link>
          </v-col>
          <v-col c1>
            <v-link oltr>Link</v-link>
          </v-col>
          <v-col c1>
            <v-link ortl>Link</v-link>
          </v-col>
          <v-col c1>
            <v-link oc>Link</v-link>
          </v-col>
        </v-row>
        <v-row center>
          <v-col c1>
            <v-link underlined>Link</v-link>
          </v-col>
          <v-col c1>
            <v-link olr>Link</v-link>
          </v-col>
          <v-col c1>
            <v-link orl>Link</v-link>
          </v-col>
          <v-col c1>
            <v-link squared>Link</v-link>
          </v-col>
          <v-col c1>
            <v-link dSquared>Link</v-link>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-space xlarge />

    <h6>API (props)</h6>
    <API :data="props" />

    <v-space
      xlarge
      v-for="i in 2"
      :key="i"
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
      code: `<v-row center>
  <v-col c1><v-link ltr>Link</v-link></v-col>
  <v-col c1><v-link rtl>Link</v-link></v-col>
  <v-col c1><v-link c>Link</v-link></v-col>
  <v-col c1><v-link oltr>Link</v-link></v-col>
  <v-col c1><v-link ortl>Link</v-link></v-col>
  <v-col c1><v-link oc>Link</v-link></v-col>
</v-row>
<v-row center>
  <v-col c1><v-link underlined>Link</v-link></v-col>
  <v-col c1><v-link olr>Link</v-link></v-col>
  <v-col c1><v-link orl>Link</v-link></v-col>
  <v-col c1><v-link squared>Link</v-link></v-col>
  <v-col c1><v-link dSquared>Link</v-link></v-col>
</v-row>`,
      props: {
        href: ['href', '#', 'String', 'href of the link'],
        ltr: ['ltr', 'false', 'Boolean', 'Left to Right'],
        rtl: ['rtl', 'false', 'Boolean', 'Right to Left'],
        c: ['c', 'false', 'Boolean', 'Center'],
        oltr: ['oltr', 'false', 'Boolean', 'Up and down left to right'],
        ortl: ['ortl', 'false', 'Boolean', 'Up an down right to left'],
        oc: ['oc', 'false', 'Boolean', 'Up and down center'],
        olr: ['olr', 'false', 'Boolean', 'Left and right'],
        orl: ['orl', 'false', 'Boolean', 'Right and Left'],
        squared: ['squared', 'false', 'Boolean', 'Squared box'],
        dSquared: ['dSquared', 'false', 'Boolean', 'Delayed squared box'],
        underlined: ['underlined', 'false', 'Boolean', 'Underlined link'],
      },
    };
  },
};
</script>
