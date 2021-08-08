import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import {copy} from '@web/rollup-plugin-copy';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import summary from 'rollup-plugin-summary';
import svg from 'rollup-plugin-svg';
import {terser} from 'rollup-plugin-terser';

const prod = process.env.NODE_ENV === 'prod';

export default {
  input: 'src/main.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    // Resolve bare module specifiers to relative paths
    resolve(),
    // Import json files
    svg(),
    // Transpile TS to JS
    typescript(),
    // Minify HTML template literals
    prod && minifyHTML(),
    // Minify JS
    prod &&
      terser({
        ecma: 2020,
        module: true,
        warnings: true,
      }),
    // Print bundle summary
    summary(),
    // Optional: copy any static assets to build directory
    copy({rootDir: 'src', patterns: 'assets/**/*'}),
  ],
};
