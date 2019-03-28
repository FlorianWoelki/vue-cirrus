export default {
  stringDoubleQuotes: {
    exp: /"(.*?)"/g,
    class: 'string',
  },
  stringSingleQuotes: {
    exp: /'(.*?)'/g,
    class: 'string',
  },
  specialWords: {
    exp: /\b(typeof|instanceof|import|as|from|export|await|new|if|true|false|else|return|do|while|switch|for|foreach|in|continue|break)(?=[^\w])/g,
    class: 'special',
  },
  specialJsGlob: {
    exp: /\b(document|window|Array|String|Object|Number|\$)(?=[^\w])/g,
    class: 'special-js',
  },
  specialJs: {
    exp: /\b(getElementsBy(TagName|ClassName|Name)|getElementById|function|async|var|const|let)(?=[^\w])/g,
    class: 'special-colored',
  },
  specialMethods: {
    exp: /\b(indexOf|match|replace|toString|length)(?=[^\w])/g,
    class: 'special-js-meth',
  },
  comment: {
    exp: /(\/\*.*\*\/)/g,
    class: 'special-comment',
  },
  inlineComment: {
    exp: /(\/\/.*)/g,
    class: 'special-comment',
  },
  sql: {
    exp: /\b(CREATE|ALL|DATABASE|TABLE|GRANT|PRIVILEGES|IDENTIFIED|FLUSH|SELECT|UPDATE|DELETE|INSERT|FROM|WHERE|ORDER|BY|GROUP|LIMIT|INNER|OUTER|AS|ON|COUNT|CASE|TO|IF|WHEN|BETWEEN|AND|OR)(?=[^\w])/g,
    class: 'special-attributes',
  },
  html: {
    exp: /(&lt;[^&]*&gt;)/g,
    class: 'special-html',
  },
};
