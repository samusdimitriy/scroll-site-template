import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',  // Папка, куда будет генерироваться сайт
      assets: 'build',
			fallback: null,
			strict: false
    }),
    // Убедитесь, что paths.base правильно настроен, если сайт не будет находиться в корне домена
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/scroll-site-template' : ''
    }
  }
};
