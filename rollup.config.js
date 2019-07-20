import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import rollupTypescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'

import pkg from './package.json'

const input = 'src/index.ts'

const typescriptPlugin = rollupTypescript({
  typescript: require('typescript'),
  sourcemap: true
})

export default [
  {
    input,
    output: {
      file: pkg.browser,
      name: 'DS',
      format: 'es',
      sourcemap: 'inline'
    },
    plugins: [resolve(), typescriptPlugin, serve(), livereload()]
  }
]
