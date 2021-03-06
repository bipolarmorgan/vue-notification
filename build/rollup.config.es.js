import base from './rollup.config.base';

const config = Object.assign({}, base, {
  output: {
    file: 'dist/vue-notification.esm.js',
    format: 'esm',
  },
});

export default config;
