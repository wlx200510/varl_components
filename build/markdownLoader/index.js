'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var hljs = require('highlight.js');
var MarkdownIt = require('markdown-it');

var wrapper = function wrapper(content) {
  return '\n<template>\n  <section v-html="content" v-once />\n</template>\n\n<script>\nexport default {\n  created() {\n    this.content = unescape(`' + escape(content) + '`);\n  }\n};\n</script>\n';
};

var highlight = function highlight(str, lang) {
  return lang && hljs.getLanguage(lang) ? '<code class="hljs">' + hljs.highlight(lang, str, true).value + '</code>' : '';
};
var parser = new MarkdownIt({
  html: true,
  highlight: highlight
});

parser.renderer.rules.table_open = function() {
  return '<table class="table">'
}

module.exports = function (source, options) {
  this.cacheable && this.cacheable();

  options = _extends({
    wrapper: wrapper
  }, options);

  return options.wrapper(parser.render(source));
};