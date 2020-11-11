<template>
  <li class="menu-item">
    <a v-bind="$attrs" v-on="$listeners">
      <slot></slot>
    </a>
  </li>
</template>
