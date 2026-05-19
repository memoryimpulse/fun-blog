/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'en-US',
  site: 'https://slate-blog-demo.vercel.app',
  avatar: '/avatar.png',
  title: 'Welcome to my World...',
  description: 'Enjoy my thoughts (from the threshold).',
  lastModified: true,
  readTime: true,
  footer: {
    copyright: '© 2025 Slate Design',
  },
  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/SlateDesign/slate-blog'
    },
]
});