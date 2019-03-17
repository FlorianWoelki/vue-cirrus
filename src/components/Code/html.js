export default {
  stringDoubleQuotes: {
    exp: /"(.*?)"/g,
    class: 'string',
  },
  html: {
    exp: /(&lt;[^&]*&gt;)/g,
    class: 'html',
  },
};
