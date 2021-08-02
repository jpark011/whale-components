import {esbuildPlugin} from '@web/dev-server-esbuild';

export default {
  preserveSymlinks: true,
  rootDir: './demo/',
  open: true,
  watch: true,
  nodeResolve: true,
  plugins: [esbuildPlugin({ts: true})],
  esbuildTarget: 'auto',
};
