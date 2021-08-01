import {esbuildPlugin} from '@web/dev-server-esbuild';

export default {
  preserveSymlinks: true,
  rootDir: './src/',
  open: true,
  watch: true,
  nodeResolve: {
    exportConditions: ['development'],
    dedupe: true,
  },
  plugins: [esbuildPlugin({ts: true})],
  esbuildTarget: 'auto',
};
