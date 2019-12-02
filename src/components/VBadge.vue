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
      default: null,
    },
  },

  mounted() {
    const node = document.getElementById(`badge-${this.content}`);

    const spanChild = node.children[0];
    if (spanChild) {
      spanChild.classList.add('badge');
      spanChild.classList.add(this.left ? 'left' : 'right');

      if (this.bottom) {
        spanChild.classList.add('bottom');
      }

      spanChild.classList.add(this.color);
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
.badge.primary[data-badge]:after {
  background: #f03d4d;
  color: #fff;
  border-color: #c21b2b;
}
.badge.info[data-badge]:after {
  background: #2972fa;
  color: #fff;
  border-color: #205BC8;
}
.badge.link[data-badge]:after {
  background: #5e5cc7;
  color: #fff;
  border-color: #4B499F;
}
.badge.dark[data-badge]:after {
  background: #363636;
  color: #fff;
  border-color: #2B2B2B;
}
.badge.success[data-badge]:after {
  background: #0dd157;
  color: #fff;
  border-color: #0AA746;
}
.badge.warning[data-badge]:after {
  background: #fab633;
  color: #fff;
  border-color: #C89028;
}
.badge.danger[data-badge]:after {
  background: #fb4143;
  color: #fff;
  border-color: #C83436;
}
.badge.light[data-badge]:after {
  background: #f6f9fc;
  color: #000;
  border-color: #C4C7C9;
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
