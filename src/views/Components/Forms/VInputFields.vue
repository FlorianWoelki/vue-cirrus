<template>
  <section class="input-fields">
    <h5>Input Fields</h5>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <pre v-html="normalInputFieldCode"></pre>
        </v-code>
      </v-col>
      <v-col
        center
        c6
        style="margin-top: 65px;"
      >
        <v-input-field
          large
          placeholder="Search ..."
        ></v-input-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <pre v-html="titleInputFieldCode"></pre>
        </v-code>
      </v-col>
      <v-col
        center
        c6
        style="margin-top: 100px;"
      >
        <v-input-field
          title="Title"
          subtitle="Subtitle"
          infoText="Information text"
          large
          placeholder="Search ..."
        >
        </v-input-field>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      normalInputFieldCode: '<xmp><v-input-field large placeholder="Search ..."></v-input-field></xmp>',
      titleInputFieldCode: `<xmp><v-input-field
  title="Title"
  subtitle="Subtitle"
  infoText="Information text"
  large
  placeholder="Search ..."
>
</v-input-field></xmp>`,
    };
  },
};
</script>
