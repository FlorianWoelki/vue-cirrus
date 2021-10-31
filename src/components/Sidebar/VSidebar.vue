<template>
  <div class="tree-nav-body">
    <div class="tree-nav-header u-flex">
      <a href="#sidebar" class="u-none-sm text-gray-600 ml-1">
        <svg
          style="width: 1.5em; height: 1.5em;"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>

    <div id="sidebar" :class="['tree-nav', sidebarClass]">
      <div class="content">
        <slot name="title"></slot>
      </div>
      <div class="tree-nav-container">
        <div class="tree">
          <slot></slot>
        </div>
      </div>
    </div>

    <a id="sidebar-close" class="tree-nav-close" href="#sidebar-close"></a>

    <slot name="content"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    hoverEffect: Boolean,
    sidebarClass: String,
  },
  setup() {
    document.body.className = 'sidebar';
  },
});
</script>

<style>
body.sidebar {
  overflow-y: hidden;
}

#sidebar {
  background-color: rgb(250, 250, 250);
}
#sidebar {
  border-right: 1px solid rgb(220, 220, 220);
}

#sidebar .hover-effect.tree-item:hover {
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  color: #f03d4d;
  background-color: #efefef;
}

#sidebar .sidebar-link {
  backface-visibility: initial;
  text-decoration: initial;
  transition: none;
  color: initial;
  padding: 0;
  font-weight: 600;
  font-size: 0.95rem;
  color: #374054;
}

#sidebar .content {
  margin: 0 0.4em 1.5em;
}

.hide-desktop .icon {
  display: initial;
}

.sidebar-menu-container {
  display: inline-block;
  cursor: pointer;
}
</style>
