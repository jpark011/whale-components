import {esbuildPlugin} from '@web/dev-server-esbuild';

export default {
  files: './src/**/*.test.ts',
  nodeResolve: true,
  preserveSymlinks: true,
  plugins: [esbuildPlugin({ts: true})],
  esbuildTarget: 'auto',
};
