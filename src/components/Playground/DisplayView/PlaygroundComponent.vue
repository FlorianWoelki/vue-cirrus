<template>
  <v-btn
    center
    :outline="outline"
    :tiny="size === 'tiny'"
    :small="size === 'small'"
    :large="size === 'large'"
    :xlarge="size === 'xlarge'"
    :primary="color === 'primary'"
    :transparent="color === 'transparent'"
    :light="color === 'light'"
    :dark="color === 'dark'"
    :black="color === 'black'"
    :info="color === 'info'"
    :link="color === 'link'"
    :success="color === 'success'"
    :warning="color === 'warning'"
    :danger="color === 'danger'"
    :loadingLeft="loading === 'loading-left'"
    :loadingRight="loading === 'loading-right'"
  >Customize Me</v-btn>
</template>

<script>
export default {
  data() {
    return {
      outline: false,
      color: 'none',
      size: 'normal',
      loading: 'none',
    };
  },

  methods: {
    changeOutline() {
      this.outline = !this.outline;
    },
    changeSize(event) {
      this.size = event.srcElement.innerHTML.toLowerCase();
    },
    changeColor(event) {
      this.color = event.srcElement.innerHTML.toLowerCase();
    },
    changeLoading(event) {
      this.loading = event.srcElement.id;
    },
  },
};
</script>
