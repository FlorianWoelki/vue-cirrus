<template>
  <div :class="[{
    'card-body': $parent.animated,
    content: true,
  }]">
    <slot></slot>
  </div>
</template>
