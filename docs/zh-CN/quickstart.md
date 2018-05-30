## 快速上手

### 安装

```shell
npm i varl -S
```

### 引入组件

#### 方式一. 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (推荐)
```bash
# 安装 babel-plugin-import 插件
npm i babel-plugin-import -D
```

```js
// 在 .babelrc 或 babel-loader 中添加插件配置
// 注意：webpack 1 无需设置 libraryDirectory。
{
  "plugins": [
    ["import", {
      "libraryName": "vant",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}
```

接着你可以在代码中直接引入 Varl 组件，插件会自动将代码转化为方式二中的按需引入形式。

```js
import { Button } from 'varl';
```

#### 方式二. 按需引入组件


 
#### 方式三. 导入所有组件
配置 babel-plugin-import 插件后将不允许导入所有组件的方式

```js
import Vue from 'vue';
import Varl from 'varl';
import 'varl/lib/varl-css/index.css';

Vue.use(Varl);
```

### CDN

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/vant/lib/vant-css/index.css">

<!-- 引入组件 -->
<script src="https://unpkg.com/vant/lib/vant.min.js"></script>
```

### vue-cli 模板


### rem 适配
Varl 中的组件样式默认使用`px`作为单位，如果需要使用`rem`作为单位，推荐使用以下两个工具

- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 用于将单位转化为 rem
- [lib-flexible](https://github.com/amfe/lib-flexible) 用于设置 rem 基准值
