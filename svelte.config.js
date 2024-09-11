import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',  // Папка, куда будет генерироваться сайт
      assets: 'build',
      fallback: null,  // Если у вас SPA, можно добавить '200.html'
      strict: false
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/scroll-site-template' : ''
    }
  }
};
