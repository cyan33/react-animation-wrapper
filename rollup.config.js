import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

const env = process.env.NODE_ENV
const config = {
  input: 'src/index.js',
  output: { format: 'cjs' },
  // external: ['symbol-observable'],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    uglify(),
  ],
}

export default config
