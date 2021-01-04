<p align="center">
<img src="./docs/banner-2021.png" alt="Artalk" width="100%">
</p>

# [Artalk](https://artalk.js.org)
> 一款简洁有趣的自托管评论系统

[![](https://img.shields.io/npm/v/artalk.svg?style=flat-square)](https://www.npmjs.com/package/artalk)
[![](https://img.shields.io/npm/dt/artalk.svg?style=flat-square)](https://www.npmjs.com/package/artalk)
[![](https://img.shields.io/github/last-commit/ArtalkJS/Artalk/master.svg?style=flat-square)](https://github.com/ArtalkJS/Artalk/commits/master)
[![](https://img.shields.io/github/issues-raw/ArtalkJS/Artalk.svg?style=flat-square)](https://github.com/ArtalkJS/Artalk/issues)
[![](https://img.shields.io/github/issues-pr-raw/ArtalkJS/Artalk.svg?style=flat-square)](https://github.com/ArtalkJS/Artalk/pulls)
[![](https://img.shields.io/github/license/ArtalkJS/Artalk.svg?style=flat-square)](./LICENSE)

## 特性
- 轻量简洁 (~23kB gzipped)
- 有趣有爱
- 自托管
- Markdown
- 表情自定
- 滑稽表情包
- 管理员密码，防冒名
- 验证码，提交频率限制
- 通知中心，邮件提醒
- 仅管理员可评论
- 无限层级回复
- 滚动加载更多
- 内容自动保存
- 暗黑模式
- 评论折叠
- 一页多个评论
- TypeScript

[查看 DEMO](https://artalk.js.org)

## 食用

> 前端资源下载：[Artalk.js](./dist/Artalk.js) | [Artalk.css](./dist/Artalk.css)

1. 部署 Artalk 的后端，传送门：[PHP API](https://github.com/ArtalkJS/Artalk-API-PHP) / Go API
2. 前端页面配置 Artalk 如下：

```html
<!DOCTYPE html>
<html>
<head>
  <!-- ... -->
  <link href="dist/Artalk.css" rel="stylesheet">
</head>
<body>
  <div id="ArtalkComments"></div>
  <!-- ... -->
  <script src="dist/Artalk.js"></script>
  <script>
  new Artalk({
    el: '#ArtalkComments', // 元素选择
    placeholder: '来啊，快活啊 ( ゜- ゜)', // 占位符
    noComment: '快来成为第一个评论的人吧~', // 无评论时显示
    defaultAvatar: 'mp', // 参考 https://cn.gravatar.com/site/implement/images/#default-image
    pageKey: '[页面唯一标识]',
    serverUrl: '[后端程序URL]',
    readMore: { // 阅读更多配置
      pageSize: 15, // 每次请求获取评论数
      autoLoad: true // 滚动到底部自动加载
    }
  });
  </script>
</body>
</html>
```

前端更多栗子，请参考 [/example/](./example/) 目录

前端更多配置项详见 [/types/artalk-config.d.ts](./types/artalk-config.d.ts)

## 开发

```bash
git clone https://github.com/ArtalkJS/Artalk.git
cd Artalk
yarn install

# Dev
yarn run dev

# Build
yarn run build
```

Made with ♥ by QWQAQ

## License
[GPL-2.0](./LICENSE)
