<template>
  <div v-if="!this.$parent.animated" class="content">
    <slot></slot>
  </div>
  <div v-else class="card-body content">
    <slot></slot>
  </div>
</template>
