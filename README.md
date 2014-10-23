# avalon-css-injector

一个动态加载 CSS 文件的 avalon 插件，原始想法来自 [angular-css-injector](https://github.com/Yappli/angular-css-injector)

## 用法

1. 导入 avalon.cssInjector.js

    插件符合 AMD 规范，可用 requirejs 加载

3. 在想加载 CSS 的地方使用加载

```javascript
   avalon.cssInjector.add("/path/to/your/css/file.css");
```

4. 移除某个加载过的 CSS 文件

```javascript
   avalon.cssInjector.remove("/path/to/your/css/file.css");
```

5. 移除所有动态加载过的 CSS 文件

```javascript
   avalon.cssInjector.removeAll();
```

## 兼容性

理论上和所使用的 avalon 框架一致，待测试

## 依赖

没有依赖！！！

## todo

1. 单页应用中当 location 变化时自动卸载动态 CSS
2. add 函数中 CSS 路径是相对于最终生成页面的路径，不是相对于当前文件的路径
