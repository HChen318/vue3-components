import basicConfig, { name, file } from './rollup.config'
export default {
  ...basicConfig,
  output: {
    name: 'Vue3Components',
    file: file('umd'),
    format: 'umd',
    globals: {
      'vue': 'Vue',
      'lodash-es': '_'
    },
    exports: 'named'
  }
}