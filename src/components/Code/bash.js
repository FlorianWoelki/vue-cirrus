export default {
  stringDoubleQuotes: {
    exp: /"(.*?)"/g,
    class: 'string',
  },
  stringSingleQuotes: {
    exp: /'(.*?)'/g,
    class: 'string',
  },
  bashKeyword: {
    exp: /\b(yarn|npm|add|install|echo|git|if|then|elif|fi|for|do|done|in|while|read|function|return|grep|pwd|case|printf|exit|shift)(?=[^\w])/g,
    class: 'bash-keyword',
  },
};
