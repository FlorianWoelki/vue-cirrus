<template>
  <div class="btn-container">
    <Button animated>Test Button</Button>
    <Button animated accent>Test Button</Button>
    <Button invertedOutline>Test Button</Button>
    <Button>Test 2 Button</Button>
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
