<template>
  <div :id="'badge-' + content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '0',
    },
    left: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: true,
    },
    bottom: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'gray',
    },
    accent: {
      type: Boolean,
      default: false,
    },
    lightgray: {
      type: Boolean,
      default: false,
    },
    darkgray: {
      type: Boolean,
      default: false,
    },
    black: {
      type: Boolean,
      default: false,
    },
  },

  mounted() {
    const node = document.getElementById(`badge-${this.content}`);

    const spanChild = node.children[0];
    if (spanChild) {
      spanChild.classList.add('badge');
      if (this.left) {
        spanChild.classList.add('left');
      } else if (this.right) {
        spanChild.classList.add('right');
      }

      if (this.bottom) {
        spanChild.classList.add('bottom');
      }

      if (this.accent) {
        spanChild.classList.add('accent-badge');
      } else if (this.lightgray) {
        spanChild.classList.add('lightgray-badge');
      } else if (this.darkgray) {
        spanChild.classList.add('darkgray-badge');
      } else if (this.black) {
        spanChild.classList.add('black-badge');
      }

      spanChild.setAttribute('data-badge', this.content);
    }
  },
};
</script>

<style>
.badge {
  position:relative;
}

.badge[data-badge]:after {
  content: attr(data-badge);
  position: absolute;
  font-size: .65em;
  background: #fefefe;
  color: #737373;
  border-color: #d9d9d9;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
  box-shadow: 0 0 1px #333;
}
.badge.accent-badge[data-badge]:after {
  background: #f03d4d;
  color: #fff;
  border-color: #c21b2b;
}
.badge.lightgray-badge[data-badge]:after {
  background: #eee;
  color: #333;
}
.badge.darkgray-badge[data-badge]:after {
  background: #444;
  color: #fff;
}
.badge.black-badge[data-badge]:after {
  background: #000;
  color: #fff;
}

.badge.right[data-badge]:after {
  top: -10px;
  right: -20px;
}

.badge.left[data-badge]:after {
  top: -10px;
  left: -20px;
}
.badge.left.bottom[data-badge]:after {
  top: 10px;
  left: -20px;
}
.badge.right.bottom[data-badge]:after {
  top: 10px;
  right: -20px;
}
</style>
