---
title: 你好，这是我的第一篇文章
pubDate: 2026-11-17
description: 站点刚刚搭好，先写一篇示例文章，用来说明怎么写文章、怎么插入图片和视频。
tags: ["开始", "说明"]
---

这个网站是用 Astro 搭建的，现在还在本地，等域名审核通过、部署上线之后，你就可以把它发给朋友了。

## 这篇文章的作用

它是一份「使用说明」：以后你写生活记录时，照着下面的写法复制修改就行。
你也可以直接删除 `src/content/posts/hello-world.md` 这个文件，列表会自动更新。

## 怎么写一篇新文章

在 `src/content/posts/` 目录下新建一个 `.md` 文件，文件名就是网址。
比如新建 `2026-11-17-爬山.md`，访问地址就是 `/blog/2026-11-17-爬山`。

文件开头必须写这几行（叫 frontmatter）：

```markdown
---
title: 文章标题
pubDate: 2026-11-17
description: 一句话摘要，会显示在列表里
tags: ["生活", "随手记"]
---
```

下面是正文，用 Markdown 写。标题用 `##`，段落直接写，列表用 `-`。

## 插入图片

图片放进 `public/uploads/` 目录（没有就自己建一个），然后在文章里这样引用：

```markdown
![图片说明](/uploads/你的图片名.jpg)
```

比如下面这张图：

![早晨的书桌](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cozy%20desk%20by%20a%20window%20in%20morning%20sunlight%2C%20open%20laptop%2C%20notebook%20and%20a%20cup%20of%20coffee%2C%20soft%20warm%20light%2C%20calm%20atmosphere%2C%20photorealistic%20photography&image_size=landscape_16_9)

## 插入视频

视频也放进 `public/uploads/`，然后在 Markdown 里直接写 HTML：

```html
<video src="/uploads/视频名.mp4" controls preload="metadata"></video>
```

建议先把视频压缩一下（手机拍的 1 分钟视频可能有 100MB，压到 10MB 以内加载才顺畅），
格式优先用 `mp4`（H.264），浏览器兼容性最好。

## 接下来

- 修改首页的自我介绍：`src/pages/index.astro`
- 填写简历内容：`src/pages/resume.astro`（黄色下划线的占位文字都需要替换）
- 添加作品：`src/pages/works.astro`

就这样，慢慢写吧。
