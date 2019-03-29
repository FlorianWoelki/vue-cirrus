<template>
  <section class="input-fields">
    <h5>Input Fields</h5>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <xmp v-html="normalInputFieldCode"></xmp>
        </v-code>
      </v-col>
      <v-col
        center
        c6
        style="margin-top: 55px;"
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
          <xmp v-html="titleInputFieldCode"></xmp>
        </v-code>
      </v-col>
      <v-col
        center
        c6
        style="margin-top: 60px;"
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
      normalInputFieldCode: `<v-input-field
  large
  placeholder="Search ..."
></v-input-field>`,
      titleInputFieldCode: `<v-input-field
  title="Title"
  subtitle="Subtitle"
  infoText="Information text"
  large
  placeholder="Search ..."
>
</v-input-field>`,
    };
  },
};
</script>
