<template>
  <div class="btn-container">
    <Button>Normal button</Button>
    <Button animated>Animated button</Button>
    <Button animated btnStyle="accent">Animated accent button</Button>
    <Button btnStyle="outline-inverted">Inverted outline button</Button>
    <Button btnStyle="transparent">Transparent button</Button>
    <Button btnStyle="light">Light Gray button</Button>
    <Button btnStyle="dark">Dark Gray button</Button>
    <Button btnStyle="black">Black button</Button>
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
