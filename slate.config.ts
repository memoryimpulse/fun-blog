/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'en-US',
  site: 'https://slate-blog-demo.vercel.app',
  avatar: '/avatar03.png',
  title: 'in memoria',
  description: 'thoughts from the threshold.',
  lastModified: true,
  readTime: true,
  footer: {
    copyright: '© 2025 slate design, used by Anthony Ng*',
  },
  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/SlateDesign/slate-blog'
    },
]
});