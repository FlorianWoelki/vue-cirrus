<template>
  <section class="badges-component">
    <p class="no-upper-margin">
      You can use the <kbd>badges</kbd> to display text on any
      component in the upper right corner. This is mostly used in notifications or messages.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Badges in their simples form display a bubble with text in it.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Badges/#!"
      component="v-badge"
      :componentProps="propsData"
    >
      <template v-slot:component>
        <div class="u-center">
          <v-badge content="5">
            <span>Customize Me</span>
          </v-badge>
        </div>
      </template>
    </Playground>

    <v-space />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-badge']" />

    <v-space xlarge />
    <v-space xlarge />
    <h3>Examples</h3>
    <h5 class="font-light no-upper-margin">Alignment</h5>
    <p class="no-upper-margin">
      You can align the badge by applying different <kbd>positions</kbd> to
      this badge component.
    </p>
    <BadgeAlignment />

    <v-space />
    <h5 class="font-light no-upper-margin">Color</h5>
    <p class="no-upper-margin">
      There are all kind of <kbd>colors</kbd> you can apply for badges.
    </p>
    <BadgeColors />
  </section>
</template>

<script>
import API from '@/views/Components/API.vue';
import Playground from '@/components/Playground/Playground.vue';
import BadgeAlignment from '@/views/Components/Badges/Examples/BadgeAlignment.vue';
import BadgeColors from '@/views/Components/Badges/Examples/BadgeColors.vue';

export default {
  components: {
    API,
    Playground,
    BadgeAlignment,
    BadgeColors,
  },

  data() {
    return {
      propsData: {
        content: '5',
        position: '',
        color: '',
      },
      props: [
        ['v-badge', 'content', 'string', '0', 'This is the content displayed in the badge.'],
        ['v-badge', 'right', 'boolean', 'true', 'It will position the badge on the right of the component.'],
        ['v-badge', 'left', 'boolean', 'false', 'It will position the badge on the left of the component.'],
        ['v-badge', 'bottom', 'boolean', 'false', 'It will position the badge on the bottom of the component.'],
        ['v-badge', 'primary', 'boolean', 'false', 'The badge will be the color: Primary.'],
        ['v-badge', 'info', 'boolean', 'false', 'The badge will be the color: Info.'],
        ['v-badge', 'link', 'boolean', 'false', 'The badge will be the color: Link.'],
        ['v-badge', 'dark', 'boolean', 'false', 'The badge will be the color: Dark.'],
        ['v-badge', 'light', 'boolean', 'false', 'The badge will be the color: Light.'],
        ['v-badge', 'success', 'boolean', 'false', 'The badge will be the color: Success.'],
        ['v-badge', 'warning', 'boolean', 'false', 'The badge will be the color: Warning.'],
        ['v-badge', 'danger', 'boolean', 'false', 'The badge will be the color: Danger.'],
      ],
    };
  },
};
</script>
