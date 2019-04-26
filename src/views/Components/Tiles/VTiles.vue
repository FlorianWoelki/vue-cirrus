<template>
  <section class="tiles-component">
    <h5>Tiles</h5>
    <p>Create simple tiles with Vue Cirrus.</p>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <xmp v-html="code"></xmp>
        </v-code>
      </v-col>
      <v-col
        c6
        style="margin-top: 175px;"
      >
        <v-tile>
          <v-tile-icon>
            <v-avatar text="FW" />
          </v-tile-icon>

          <v-tile-content
            title="Robert Downey Jr just poked you."
            subtitle="Poke him back or view on facebook."
            info="6 seconds ago"
          />

          <v-tile-buttons>
            <v-btn btnStyle="transparent">Share</v-btn>
          </v-tile-buttons>
        </v-tile>
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
      code: `<v-tile>
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
</v-tile>`,
      props: {
        title: ['title', 'empty', 'String', 'Title of the tile content'],
        subtitle: ['subtitle', 'empty', 'String', 'Subtitle of the tile content'],
        info: ['info', 'empty', 'String', 'Infotext of the tile content'],
      },
    };
  },
};
</script>
