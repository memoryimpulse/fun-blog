/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'en-US',
  site: 'https://slate-blog-demo.vercel.app',
  avatar: '/avatar02.png',
  title: 'in memoria',
  description: 'thoughts from the threshold.',
  lastModified: true,
  readTime: true,
  footer: {
    copyright: '© 2025 slate design, used by Anthony Ng*',
  },
  socialLinks: [
    {
      icon: 'substack',
      link: 'https://substack.com/@memoryimpulse'
    }, // <-- This comma is critical before adding the next item!
    {
      icon: 'x', // or 'twitter' depending on what your theme supports
      link: 'https://x.com/memoryimpulse'
    },
]
});