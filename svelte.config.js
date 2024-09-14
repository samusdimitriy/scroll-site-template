import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build', 
      assets: 'build',
      fallback: null,
      strict: false
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/scroll-site-template' : ''
    }
  }
};
