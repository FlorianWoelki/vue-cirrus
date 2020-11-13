<template>
  <div class="tree-nav-body">
    <div class="tree-nav-header">
      <a
        href="#sidebar"
        class="u-none-sm"
      >
        <span class="icon">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10 fa-wrapper small" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
        </span>
      </a>
    </div>

    <div
      id="sidebar"
      class="tree-nav"
      :style="styleSidebar()"
    >
      <div class="content">
        <slot name="title"></slot>
      </div>
      <div class="tree-nav-container">
        <div class="tree">
          <slot></slot>
        </div>
      </div>
    </div>
    <a
      href="#sidebar-close"
      id="sidebar-close"
      class="tree-nav-close"
    ></a>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  props: {
    noPadding: Boolean,
    hoverEffect: Boolean,
  },

  beforeCreate() {
    document.body.className = 'sidebar';
  },

  methods: {
    styleSidebar() {
      return {
        padding: this.noPadding ? 0 : null,
      };
    },
  },
};
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
  -moz-transition: all .2s ease-in;
  -o-transition: all .2s ease-in;
  -webkit-transition: all .2s ease-in;
  transition: all .2s ease-in;
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
  font-size: .95rem;
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
