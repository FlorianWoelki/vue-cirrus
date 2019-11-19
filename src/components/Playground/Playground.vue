<template>
  <v-container>
    <div class="title-section" v-if="!noTitle">
      <h3>Playground</h3>
      <v-space xlarge />
    </div>

    <div class="playground-card">
      <v-tabs fill style="margin-bottom: 25px; margin-top: 5px;">
        <v-tab
          :href="href"
          :selected="!codeSelected"
          @click="() => { codeSelected = false }"
        >
          <i class="fas fa-globe fa-lg"></i>
        </v-tab>
        <v-tab
          :href="href"
          :selected="codeSelected"
          @click="() => { codeSelected = true }"
        >
          <i class="fas fa-code fa-lg"></i>
        </v-tab>
      </v-tabs>

      <div class="card-content">
        <PlaygroundComponent
          v-if="!codeSelected"
          :outline="propsData.outline"
          :color="propsData.color"
          :size="propsData.size"
          :loading="propsData.loading"
        >
          <slot name="component"></slot>
        </PlaygroundComponent>
        <CodeComponent
          v-if="codeSelected"
          :component="component"
          :propsData="propsData"
          :disableMessage="disableMessage"
        />
      </div>
    </div>
    <div class="display-view">
      <v-space />

      <slot />
    </div>
  </v-container>
</template>

<script>
import PlaygroundComponent from '@/components/Playground/DisplayView/PlaygroundComponent.vue';
import CodeComponent from '@/components/Playground/DisplayView/CodeComponent.vue';

export default {
  data() {
    return {
      codeSelected: false,
      propsData: this.componentProps,
    };
  },

  props: {
    component: {
      type: String,
      default: '',
    },
    componentProps: {
      type: Object,
    },
    noTitle: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: '/#/testplayground/#!',
    },
    disableMessage: {
      type: Boolean,
      default: false,
    },
  },

  components: {
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
