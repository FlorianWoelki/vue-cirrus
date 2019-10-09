<template>
  <v-container>
    <h3>Playground</h3>
    <v-space xlarge />

    <div class="playground-card">
      <v-tabs fill style="margin-bottom: 25px; margin-top: 5px;">
        <v-tab
          href="/#/testplayground/#!"
          :selected="!codeSelected"
          @click="() => { codeSelected = false }"
        >
          <i class="fas fa-globe fa-lg"></i>
        </v-tab>
        <v-tab
          href="/#/testplayground/#!"
          :selected="codeSelected"
          @click="() => { codeSelected = true }"
        >
          <i class="fas fa-code fa-lg"></i>
        </v-tab>
      </v-tabs>

      <div class="card-content">
        <PlaygroundComponent v-if="!codeSelected" />
        <CodeComponent v-if="codeSelected" />
      </div>
    </div>
    <DisplayView v-if="!codeSelected" />
  </v-container>
</template>

<script>
import DisplayView from '@/components/Playground/DisplayView.vue';
import PlaygroundComponent from '@/components/Playground/DisplayView/PlaygroundComponent.vue';
import CodeComponent from '@/components/Playground/DisplayView/CodeComponent.vue';

export default {
  data() {
    return {
      codeSelected: false,
    };
  },
  components: {
    DisplayView,
    PlaygroundComponent,
    CodeComponent,
  },
};
</script>

<style>
.playground-card {
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  transition: .3s;
  backface-visibility: hidden;
  box-shadow: 0 5px 12px 0 rgba(42, 51, 83, .12), 0 0 5px rgba(0, 0, 0, .06);
  margin-bottom: 1rem;
}

.playground-card .card-content {
  padding: 1.5rem;
}
</style>
