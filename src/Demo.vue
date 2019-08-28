<template>
  <div class="demo">
    <v-row center>
      <v-col>
        <h1>Hello World Cirrus</h1>
        <v-divider short></v-divider>
        <v-btn link tooltipText="Hi">Testing</v-btn>
        <v-tag-container>
          <v-tag black>Version</v-tag>
          <v-tag info>0.5.5</v-tag>
          <v-tag closable warning></v-tag>
        </v-tag-container>

        <v-pagination bordered>
          <v-pagination-item disabled>Prev</v-pagination-item>
          <v-pagination-item selected>1</v-pagination-item>
          <v-pagination-item>2</v-pagination-item>
          <v-pagination-item>Next</v-pagination-item>
        </v-pagination>

        <v-tile enableBoxShadow>
          <v-tile-icon>
            <v-avatar text="FW" />
          </v-tile-icon>

          <v-tile-content
            title="Robert Downey Jr just poked you."
            subtitle="Poke him back or view on facebook."
            info="6 seconds ago"
          />

          <v-tile-buttons>
            <v-btn btnStyle="transparent">XXX</v-btn>
          </v-tile-buttons>
        </v-tile>

        <v-input-field title="Test" subtitle="Hello" infoText="Test"></v-input-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      console.log(1);
    },
  },
};
</script>
