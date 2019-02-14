<template>
  <div class="btn-container">
    <Button animated>Animated button</Button>
    <Button animated btnStyle="accent">Animated accent button</Button>
    <Button btnStyle="outline-inverted">Inverted outline button</Button>
    <Button>Normal button</Button>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  name: 'Demo',
  components: {
    Button,
  },
};
</script>
