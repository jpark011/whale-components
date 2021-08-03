import {esbuildPlugin} from '@web/dev-server-esbuild';

export const baseConfig = {
  preserveSymlinks: true,
  nodeResolve: true,
  plugins: [esbuildPlugin({ts: true})],
  esbuildTarget: 'auto',
};

export default {
  ...baseConfig,
  rootDir: './',
  appIndex: './demo/index.html',
  open: true,
  watch: true,
};
