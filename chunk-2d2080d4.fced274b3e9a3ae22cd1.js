(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2080d4"],{a2c0:function(s,t,a){"use strict";a.r(t);var r=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},l=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("Select 选择器")]),a("p",[a("strong",[s._v("当选项过多时，使用下拉菜单展示并选择内容。")])]),a("h3",[s._v("基础用法")]),a("p",[a("strong",[s._v("只有一个select")])]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"hljs language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("v-select")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LIST ONE"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("defaultValue")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":selectData")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"selectData"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":alwaysShowTitle")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@select")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"selectFn"')]),s._v("\n    >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("v-select")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data() {\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("selectData")]),s._v(": [\n        { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LIST ONE 1"')]),s._v(" },\n        { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LIST ONE 2"')]),s._v(" },\n        { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LIST ONE 3"')]),s._v(" },\n        { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LIST ONE 4"')]),s._v(" },\n        { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LIST ONE 5"')]),s._v(" }\n      ],\n    };\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    selectFn(index, id) {\n      "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(index, id);\n    }\n  }\n};\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),a("p",[a("strong",[s._v("两个及多个（需设置width属性）")])]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"hljs language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- first --\x3e")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("v-select")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LIST ONE"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"50%"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("defaultValue")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@select")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"selectFn"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":selectData")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"selectData"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":alwaysShowTitle")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v("\n    >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("v-select")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- second --\x3e")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("v-select")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LIST TWO"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"50%"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ellipsisWidth")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"65px"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("defaultValue")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@select")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"selectFn1"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":selectData")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"selectData1"')]),s._v("\n    >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("v-select")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data() {\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("selectData")]),s._v(": [\n        { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LIST ONE 1"')]),s._v(" },\n        { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LIST ONE 2"')]),s._v(" },\n        { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LIST ONE 3"')]),s._v(" },\n        { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LIST ONE 4"')]),s._v(" },\n        { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LIST ONE 5"')]),s._v(" }\n      ],\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("selectData1")]),s._v(": [\n        { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LIST TWO 1"')]),s._v(" },\n        { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LIST TWO 2"')]),s._v(" },\n        { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LIST TWO 3"')]),s._v(" },\n        { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LIST TWO 4"')]),s._v(" },\n        { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LIST TWO 5"')]),s._v(" }\n      ]\n    };\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    selectFn(index, id) {\n      "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(index, id);\n    },\n    selectFn1(index, id) {\n      "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(index, id);\n    }\n  }\n};\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("Attributes")]),a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("参数")]),a("th",[s._v("说明")]),a("th",[s._v("类型")]),a("th",[s._v("可选值")]),a("th",[s._v("默认值")])])]),a("tbody",[a("tr",[a("td",[s._v("selectData")]),a("td",[s._v("下拉数据")]),a("td",[s._v("array")]),a("td",[s._v("—")]),a("td",[s._v("[]")])]),a("tr",[a("td",[s._v("title")]),a("td",[s._v("默认显示的标题")]),a("td",[s._v("string")]),a("td",[s._v("—")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("alwaysShowTitle")]),a("td",[s._v("是否一直显示默认标题")]),a("td",[s._v("boolean")]),a("td",[s._v("—")]),a("td",[s._v("false")])]),a("tr",[a("td",[s._v("defaultValue")]),a("td",[s._v("默认选中的值")]),a("td",[s._v("number/string")]),a("td",[s._v("—")]),a("td",[s._v("0")])]),a("tr",[a("td",[s._v("width")]),a("td",[s._v("select组件的宽度")]),a("td",[s._v("string")]),a("td",[s._v("—")]),a("td",[s._v("100%")])]),a("tr",[a("td",[s._v("ellipsisWidth")]),a("td",[s._v("select文字超过多出省略号的宽度")]),a("td",[s._v("string")]),a("td",[s._v("—")]),a("td",[s._v("120px")])]),a("tr",[a("td",[s._v("preventScroll")]),a("td",[s._v("select下拉菜单出现时，是否禁止页面的scroll")]),a("td",[s._v("boolean")]),a("td",[s._v("—")]),a("td",[s._v("true")])])])]),a("h3",[s._v("Events")]),a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("事件名称")]),a("th",[s._v("说明")]),a("th",[s._v("回调参数")])])]),a("tbody",[a("tr",[a("td",[s._v("select")]),a("td",[s._v("select 选中时的回调函数")]),a("td",[s._v("参数1：索引，参数2：所中项的id值")])])])])])}],n=a("2877"),e={},v=Object(n["a"])(e,r,l,!1,null,null,null);v.options.__file="select.md";t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d2080d4.fced274b3e9a3ae22cd1.js.map