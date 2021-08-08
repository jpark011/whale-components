import {esbuildPlugin} from '@web/dev-server-esbuild';

export const baseConfig = {
  preserveSymlinks: true,
  nodeResolve: true,
  plugins: [esbuildPlugin({ts: true, json: true, loaders: {'.svg': 'text'}, target: 'auto'})],
};

export default {
  ...baseConfig,
  rootDir: './demo',
  appIndex: './demo/index.html',
  open: true,
  watch: true,
};
