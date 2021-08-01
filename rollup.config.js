import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import {copy} from '@web/rollup-plugin-copy';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import summary from 'rollup-plugin-summary';
import {terser} from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    // Resolve bare module specifiers to relative paths
    resolve(),
    // Transpile TS to JS
    typescript(),
    // Minify HTML template literals
    minifyHTML(),
    // Minify JS
    terser({
      ecma: 2020,
      module: true,
      warnings: true,
    }),
    // Print bundle summary
    summary(),
    // Optional: copy any static assets to build directory
    copy({}),
  ],
};
