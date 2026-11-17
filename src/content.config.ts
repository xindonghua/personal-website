import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * 生活记录（博客）集合
 * 每篇文章 = src/content/posts 目录下的一个 .md 文件
 * 文件名就是网址：hello-world.md -> /blog/hello-world
 */
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { posts };
